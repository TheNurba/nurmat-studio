import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display-g", display: "swap" });
const sans = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans-g", display: "swap" });

export const metadata: Metadata = {
  title: "Nurmat_MN — Звукозапись & Аранжировка студиясы | Бишкек",
  description:
    "Nurmat_MN — Бишкектеги профессионалдык үн жаздыруу, аранжировка жана сведение студиясы. 5+ жыл тажрыйба. Вокал жаздыруу: 4 000–6 000 сом, Аранжировка: 12 000–20 000 сом.",
  keywords: [
    "Nurmat_MN", "Нурмат Мирзатов", "студия Бишкек", "звукозапись Бишкек",
    "аранжировка", "вокал жаздыруу", "сведение", "мастеринг",
  ],
  openGraph: {
    title: "Nurmat_MN — Звукозапись студиясы",
    description: "Студиялык сапаттагы жазуу жана аранжировка. Бишкек, Киевская 77.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ky" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
