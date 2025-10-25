import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    // --- Récupération des données du formulaire ---
    const formData = await req.formData();
    const permisType = formData.get("permisType")?.toString() || "";

    // ✅ Correction : parser les objets JSON envoyés depuis le client
    const personalInfo = JSON.parse(formData.get("personalInfo")?.toString() || "{}");
    const preferences = JSON.parse(formData.get("preferences")?.toString() || "{}");

    // --- Vérification de l'email utilisateur ---
    console.log("Email utilisateur :", personalInfo.email);
    if (!personalInfo.email || personalInfo.email.trim() === "") {
      throw new Error("L'email de l'utilisateur est manquant ou invalide.");
    }

    // --- Fichiers joints ---
    const attachments: any[] = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({ filename: value.name, content: buffer });
      }
    }

    // --- Traduction type de permis ---
    const getPermisTypeLabel = (type: string) => {
      const types: { [key: string]: string } = {
        'B': 'Permis B - Véhicules légers',
        'A': 'Permis A - Motocycles',
        'A2': 'Permis A2 - Motocycles 35kW',
        'C': 'Permis C - Poids lourds',
        'D': 'Permis D - Transport voyageurs',
        'AM': 'Permis AM - Cyclomoteurs'
      };
      return types[type] || type;
    };

    // --- Configuration SMTP ---
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
      connectionTimeout: 10000,
    });

    await transporter.verify();

    // --- Envoi de la demande à l’administrateur ---
    console.log('📨 Envoi de l’email admin...');
    await transporter.sendMail({
      from: `"Permis Plus" <${process.env.MAIL_USER}>`,
      to: "contact@franceprojetsubvention.goutsky.com", // Remplace par ton mail admin
      subject: "Nouvelle demande de permis reçue",
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
        <p><i>Les fichiers justificatifs sont attachés à cet email.</i></p>
      `,
      attachments,
    });

    // --- Email de confirmation à l'utilisateur ---
    console.log('📩 Envoi email de confirmation utilisateur...');
    await transporter.sendMail({
      from: `"Permis Plus" <${process.env.MAIL_USER}>`,
      to: personalInfo.email,
      subject: "Votre demande de permis a bien été reçue ✅",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 40px 0; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <div style="background: #1e40af; padding: 20px; text-align: center;">
              <img src="https://permis.onrender.com/logo.png" alt="Permis Plus" style="width: 80px; border-radius: 50%;" />
              <h1 style="color: white; margin: 10px 0 0;">Permis Plus</h1>
            </div>
            <div style="padding: 30px;">
              <h2 style="color: #1e40af;">Bonjour ${personalInfo.prenom} ${personalInfo.nom},</h2>
              <p>Nous accusons bonne réception de votre demande concernant votre dossier de <strong>${getPermisTypeLabel(permisType)}</strong>.</p>
              <p>Celle-ci a bien été transmise à notre équipe d’admission, qui l’examinera avec la plus grande attention dans les meilleurs délais. <strong>48 heures</strong> pour la suite.</p>
            </div>
            <div style="background: #1e3a8a; color: white; text-align: center; padding: 15px; font-size: 13px;">
              © ${new Date().getFullYear()} Permis Plus — Tous droits réservés.
            </div>
          </div>
        </div>
      `
    });

    console.log('✅ Emails envoyés avec succès');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("🚨 Erreur d’envoi :", error);
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
