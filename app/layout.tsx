import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "9T9 Information Technology | ERP Software & Cyber Security",
  description:
    "9T9 IT delivers ERPNext-based ERP software and cyber security services for businesses across Bahrain, GCC, USA, and Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ambient-glow noise-overlay">{children}</body>
    </html>
  );
}
