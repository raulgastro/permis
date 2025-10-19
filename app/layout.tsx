import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Permis 2",
  description: "Site créé à partir du projet Readdy",
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
