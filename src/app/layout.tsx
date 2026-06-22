import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vem com a Ju — Excursões e Viagens",
  description:
    "Viagens e excursões com quem cuida de você como família. Conheça nossos pacotes e reserve sua aventura.",
  openGraph: {
    title: "Vem com a Ju — Excursões e Viagens",
    description: "Viagens e excursões com quem cuida de você como família.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
