import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import { Google_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const helveticaLTPro = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica LT Pro/Helvetica LT Pro Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica LT Pro/Helvetica LT Pro Oblique.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Helvetica LT Pro/Helvetica LT Pro Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica LT Pro/Helvetica LT Pro Bold Oblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-lt-pro",
});

export const metadata: Metadata = {
  title: "compl.exe",
  description: "This is web page of music producer unit by Onnenai & oliveoiler"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jost.variable} ${geistMono.variable} ${googleSans.variable} ${helveticaLTPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
