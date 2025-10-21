import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Permis Plus",
  description: "Votre partenaire de confiance pour obtenir tous types de permis de conduire. dans les delais les plus brefs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        {children}
      </body>
    </html>
  );
}
