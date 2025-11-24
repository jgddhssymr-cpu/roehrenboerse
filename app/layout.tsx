// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Röhrenbörse",
  description: "Marktplatz für Röhren & Vintage Audio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="page">{children}</body>
    </html>
  );
}
