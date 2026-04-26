import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import EntryTransition from "@/components/EntryTransition";
import MotionProvider from "@/components/MotionProvider";
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
    "Experience authentic Indian flavours at Masala Indian Restaurant with tandoori dishes, curries, vegetarian choices and a full drinks menu.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={marcellus.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Masala Indian Restaurant" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:ital,opsz,wdth,wght,GRAD@0,8,100,400..1000,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page text-ink font-body antialiased">
        <MotionProvider>
          <EntryTransition />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
