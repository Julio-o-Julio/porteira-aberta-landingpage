import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://porteiraaberta.com.br"),
  title: {
    default: "Porteira Aberta — Crédito para o Agro | Projetos Agropecuários",
    template: "%s | Porteira Aberta",
  },
  description:
    "Crédito rural, projetos agropecuários e consultoria para o produtor rural. Parceiros oficiais Sicredi e Cresol. Do primeiro contato ao crédito liberado.",
  keywords: [
    "crédito rural",
    "crédito para o agro",
    "projetos agropecuários",
    "PRONAF",
    "FCO",
    "Sicredi",
    "Cresol",
    "financiamento rural",
    "consultoria agropecuária",
  ],
  authors: [{ name: site.fullName }],
  openGraph: {
    title: "Porteira Aberta — Crédito para o Agro",
    description:
      "Projetos agropecuários e crédito rural com as melhores condições. Parceiros Sicredi e Cresol.",
    type: "website",
    locale: "pt_BR",
    siteName: site.fullName,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2F6B1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
