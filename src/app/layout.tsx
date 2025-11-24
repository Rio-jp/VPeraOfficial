import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V-Pera | Real-time Translation for VRChat",
  description: "Break language barriers in Virtual Reality with V-Pera. Real-time speech-to-text and translation powered by Groq.",
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/VPeraOfficial/icon.png' : '/icon.png',
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
