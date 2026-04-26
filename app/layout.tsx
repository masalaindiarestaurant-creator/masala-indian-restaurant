import type { Metadata } from "next";
import { Google_Sans_Flex, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "wdth", "GRAD", "ROND"],
  variable: "--font-google-sans-flex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Masala Indian Restaurant | Authentic Indian Cuisine",
  description:
    "Experience authentic Indian flavours at Masala Indian Restaurant. Traditional recipes, freshest ingredients, warm hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${googleSansFlex.variable}`}>
      <body className="bg-page text-ink font-body antialiased">{children}</body>
    </html>
  );
}
