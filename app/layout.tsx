import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
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
    <html lang="en" className={marcellus.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ital,opsz,wdth,wght,GRAD@0,8,100,400..1000,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page text-ink font-body antialiased">{children}</body>
    </html>
  );
}
