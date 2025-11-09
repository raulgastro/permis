import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { CreateEmailOptions } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // --- Récupération des données du formulaire ---
    const formData = await req.formData();
    const permisType = formData.get("permisType")?.toString() || "";

    // --- Parse les données JSON ---
    const personalInfo = JSON.parse(formData.get("personalInfo")?.toString() || "{}");
    const preferences = JSON.parse(formData.get("preferences")?.toString() || "{}");

    if (!personalInfo.email || personalInfo.email.trim() === "") {
      throw new Error("L'email de l'utilisateur est manquant ou invalide.");
    }

    // --- Fichiers joints ---
    const attachments: { filename: string; content: string }[] = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer.toString("base64"),
        });
      }
    }

    // --- Types de permis ---
    const getPermisTypeLabel = (type: string) => {
      const types: Record<string, string> = {
        B: "Permis B - Véhicules légers",
        A: "Permis A - Motocycles",
        A2: "Permis A2 - Motocycles 35kW",
        C: "Permis C - Poids lourds",
        D: "Permis D - Transport voyageurs",
        AM: "Permis AM - Cyclomoteurs",
      };
      return types[type] || type;
    };

    // --- Initialisation de Resend ---
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 💡 Expéditeur :
    const FROM_EMAIL =
      process.env.NODE_ENV === "production"
        ? "Permis Plus <contact@franceprojetsubvention.goutsky.com>"
        : "Permis Plus <onboarding@resend.dev>";

    // --- Email Admin ---
    const adminEmail: CreateEmailOptions & { reply_to?: string } = {
  from: FROM_EMAIL,
      to: "contact@franceprojetsubvention.goutsky.com",
      reply_to: personalInfo.email, // ✅ Permet de répondre directement à l'utilisateur
      subject: "Nouvelle demande de permis reçue 🚗",
      html: `
        <h2>Nouvelle demande de permis</h2>
        <p><strong>Type de permis :</strong> ${getPermisTypeLabel(permisType)}</p>
        <h3>Informations personnelles</h3>
        <ul>
          <li><b>Nom :</b> ${personalInfo.nom}</li>
          <li><b>Prénom :</b> ${personalInfo.prenom}</li>
          <li><b>Date de naissance :</b> ${personalInfo.dateNaissance}</li>
          <li><b>Lieu de naissance :</b> ${personalInfo.lieuNaissance}</li>
          <li><b>Nationalité :</b> ${personalInfo.nationalite}</li>
          <li><b>Adresse :</b> ${personalInfo.adresse}</li>
          <li><b>Code postal :</b> ${personalInfo.codePostal}</li>
          <li><b>Ville :</b> ${personalInfo.ville}</li>
          <li><b>Email :</b> ${personalInfo.email}</li>
          <li><b>Téléphone :</b> ${personalInfo.telephone}</li>
        </ul>
        <h3>Préférences</h3>
        <ul>
          <li><b>Auto-école :</b> ${preferences.autoEcole}</li>
          <li><b>Mode de formation :</b> ${preferences.modeFormation}</li>
          <li><b>Commentaires :</b> ${preferences.commentaires}</li>
        </ul>
        <p><i>Les fichiers justificatifs sont joints à cet email.</i></p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    // --- Email Utilisateur ---
    const userEmail: CreateEmailOptions = {
      from: FROM_EMAIL,
      to: personalInfo.email,
      subject: "Votre demande de permis a bien été reçue ✅",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 40px 0; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <div style="background: #1e40af; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 10px 0 0;">Permis Plus</h1>
            </div>
            <!-- En-tête avec logo -->
            <div style="background: #1e40af; padding: 30px; text-align: center;">
              <img src="https://permis.onrender.com/logo.png" alt="Logo AutoFinancement" style="max-width: 150px; margin-bottom: 10px;" />
              <h1 style="color: white; margin: 0;">AutoFinancement</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #1e40af;">Bonjour ${personalInfo.prenom} ${personalInfo.nom},</h2>
              <p>Nous accusons bonne réception de votre demande concernant votre dossier de <strong>${getPermisTypeLabel(permisType)}</strong>.</p>
              <p>Elle a été transmise à notre équipe, qui l’examinera sous <strong>48 heures</strong>.</p>
            </div>
            <div style="background: #1e3a8a; color: white; text-align: center; padding: 15px; font-size: 13px;">
              © ${new Date().getFullYear()} Permis Plus — Tous droits réservés.
            </div>
          </div>
        </div>
      `,
    };

    console.log("📨 Envoi des emails via Resend...");

    // --- Envoi avec gestion d'erreur utilisateur ---
    try {
      await resend.emails.send(adminEmail);
      await resend.emails.send(userEmail);
    } catch (error) {
      console.error("⚠️ Erreur lors de l'envoi à l'utilisateur :", error);
      await resend.emails.send(adminEmail); // On notifie quand même l’admin
    }

    console.log("✅ Emails envoyés avec succès !");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🚨 Erreur lors de l’envoi :", error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
    });
  }
}
