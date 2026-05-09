import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blackcamelmedia.com"),
  title: "Sambhav Mehra | Black Camel Media",
  description:
    "Food and lifestyle photographer in Dubai. Sambhav Mehra portfolio showcasing photography, video campaigns, and hospitality work across the Middle East.",
  openGraph: {
    title: "Sambhav Mehra | Black Camel Media",
    description:
      "Food and lifestyle photographer in Dubai with premium visual work across hospitality and global brands.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable}`}>{children}</body>
    </html>
  );
}
