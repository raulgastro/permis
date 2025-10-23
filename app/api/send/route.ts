import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export const runtime = 'nodejs'; // important pour éviter les erreurs dans Next.js

export async function POST(req: Request) {
  try {
    // Récupération des données envoyées depuis le client
    const formData = await req.formData();

    // Extraction des champs texte
    const permisType = formData.get("permisType")?.toString() || "";
    const personalInfo = JSON.parse(formData.get("personalInfo")?.toString() || "{}");
    const preferences = JSON.parse(formData.get("preferences")?.toString() || "{}");

    // Préparation des fichiers uploadés
    const attachments: any[] = [];
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
        });
      }
    }

    // Création du transport SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ✅ Email vers l’administrateur
    const adminMail = {
      from: `"Visa Assistance" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, // Ton adresse admin
      subject: "Nouvelle demande de permis reçue",
      html: `
        <h2>Nouvelle demande de permis</h2>
        <p><strong>Type de permis :</strong> ${permisType}</p>
        <h3>Informations personnelles</h3>
        <ul>
          <li><b>Nom :</b> ${personalInfo.nom}</li>
          <li><b>Prénom :</b> ${personalInfo.prenom}</li>
          <li><b>Date de naissance :</b> ${personalInfo.dateNaissance}</li>
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
    };

    // ✅ Email de confirmation à l’utilisateur
    const clientMail = {
  from: `"Permis Plus" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Votre demande de permis a bien été reçue ✅",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f7f9fc; padding: 40px 0; color: #333;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
      <div style="background: #1e40af; padding: 20px; text-align: center;">
        <img src="https://permis.onrender.com//logo.png" alt="Permis Plus" style="width: 80px; border-radius: 50%;" />
        <h1 style="color: white; margin: 10px 0 0;">Permis Plus</h1>
      </div>
      <div style="padding: 30px;">
        <h2 style="color: #1e40af;">Bonjour ${prenom || ""} ${nom || ""},</h2>
        <p style="font-size: 16px; line-height: 1.6;">
          Nous confirmons la bonne réception de votre demande de <strong>permis de conduire (${getPermisTypeLabel(permisType)})</strong>.
          Toute l’équipe de <strong>Permis Plus</strong> vous remercie pour votre confiance.
        </p>
        <p style="font-size: 16px; line-height: 1.6;">
          Votre dossier est actuellement en cours d’analyse par notre service administratif.  
          Un conseiller vous contactera sous <strong>48 heures</strong> afin de valider les informations et planifier la suite de votre accompagnement.
        </p>

        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1e3a8a;">
            📍 <strong>Résumé de votre demande :</strong><br/>
            - Type de permis : <strong>${getPermisTypeLabel(permisType)}</strong><br/>
            - Nom : ${nom || ""} ${prenom || ""}<br/>
            - Email : ${email || ""}<br/>
            - Téléphone : ${telephone || ""}<br/>
            - Ville : ${ville || ""}<br/>
          </p>
        </div>

        <p style="font-size: 16px; line-height: 1.6;">
          Nous mettons tout en œuvre pour simplifier vos démarches et vous garantir un accompagnement rapide, transparent et personnalisé.
        </p>

        <p style="margin-top: 30px; font-size: 15px; color: #555;">
          À très bientôt,<br/>
          <strong>L’équipe Permis Plus</strong><br/>
          📞 +33 6 45 12 78 33<br/>
          ✉️ contact@permisplus.com
        </p>
      </div>
      <div style="background: #1e3a8a; color: white; text-align: center; padding: 15px; font-size: 13px;">
        © ${new Date().getFullYear()} Permis Plus — Tous droits réservés.
      </div>
    </div>
  </div>
  `
};
