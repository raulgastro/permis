import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Permis plus",
  description: "Obtenez votre permis de conduire facilement avec Permis Plus - Votre auto-école de confiance pour tous types de permis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 🟩 Barre de navigation affichée sur toutes les pages */}
        <Navbar />

        {/* 🟦 Contenu spécifique à chaque page */}
        {children}

        {/* 🟨 Pied de page affiché sur toutes les pages */}
        <Footer />
      </body>
    </html>
  );
}

