import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { CreateEmailOptions } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const {
      prenom,
      nom,
      email,
      telephone,
      montant,
      duree,
      apport,
      revenus,
      situation,
      commentaires,
      "type-vehicule": typeVehicule,
    } = formData;

    if (!email || email.trim() === "") {
      throw new Error("L'email de l'utilisateur est manquant ou invalide.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const FROM_EMAIL =
      process.env.NODE_ENV === "production"
        ? "AutoFinancement <contact@franceprojetsubvention.goutsky.com>"
        : "AutoFinancement <onboarding@resend.dev>";

    // --- Email Admin ---
    const adminEmail: CreateEmailOptions & { reply_to?: string } = {
      from: FROM_EMAIL,
      to: "contact@franceprojetsubvention.goutsky.com",
      reply_to: email,
      subject: "💰 Nouvelle demande de financement reçue",
      html: `
        <h2>Nouvelle demande de financement</h2>
        <h3>Informations du demandeur</h3>
        <ul>
          <li><b>Nom :</b> ${nom}</li>
          <li><b>Prénom :</b> ${prenom}</li>
          <li><b>Email :</b> ${email}</li>
          <li><b>Téléphone :</b> ${telephone}</li>
        </ul>

        <h3>Détails du financement</h3>
        <ul>
          <li><b>Montant souhaité :</b> ${montant} €</li>
          <li><b>Durée :</b> ${duree} mois</li>
          <li><b>Apport personnel :</b> ${apport || 0} €</li>
          <li><b>Revenus mensuels :</b> ${revenus} €</li>
          <li><b>Situation professionnelle :</b> ${situation}</li>
          <li><b>Type de véhicule :</b> ${typeVehicule || "Non précisé"}</li>
        </ul>

        <h3>Commentaires :</h3>
        <p>${commentaires || "Aucun commentaire fourni."}</p>
      `,
    };

    // --- Email Utilisateur ---
    const userEmail: CreateEmailOptions = {
      from: FROM_EMAIL,
      to: email,
      subject: "Votre demande de financement a bien été reçue ✅",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 40px 0; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            
            <!-- En-tête avec logo -->
            <div style="background: #1e40af; padding: 20px; text-align: center;">
              <img src="https://permis.onrender.com/logo.png" alt="Logo AutoFinancement" style="max-width: 150px; margin-bottom: 10px;" />
              <h1 style="color: white; margin: 0;">AutoFinancement</h1>
            </div>

            <!-- Contenu principal -->
            <div style="padding: 30px;">
              <h2 style="color: #1e40af;">Bonjour ${prenom} ${nom},</h2>
              <p>Nous avons bien reçu votre <strong>demande de financement automobile</strong>.</p>
              <p>Notre équipe examine votre dossier et reviendra vers vous sous <strong>24 heures ouvrées</strong>.</p>

              <h3>Résumé de votre demande :</h3>
              <ul>
                <li><b>Montant souhaité :</b> ${montant} €</li>
                <li><b>Durée :</b> ${duree} mois</li>
                <li><b>Revenus mensuels :</b> ${revenus} €</li>
                <li><b>Situation :</b> ${situation}</li>
                <li><b>Apport :</b> ${apport || 0} €</li>
                <li><b>Type de véhicule :</b> ${typeVehicule || "Non précisé"}</li>
              </ul>

              ${commentaires ? `<h3>Commentaires :</h3><p>${commentaires}</p>` : ""}
              <p style="margin-top:20px;">Merci pour votre confiance,<br>
              L’équipe <strong>AutoFinancement</strong> 🚗💨</p>
            </div>

            <!-- Pied de page -->
            <div style="background: #1e3a8a; color: white; text-align: center; padding: 15px; font-size: 13px;">
              © ${new Date().getFullYear()} AutoFinancement — Tous droits réservés.
            </div>
          </div>
        </div>
      `,
    };

    await resend.emails.send(adminEmail);
    await resend.emails.send(userEmail);

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
