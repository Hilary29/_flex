import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from "next/font/google"
import {NextIntlClientProvider} from 'next-intl'

// Load the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load the Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
})


export const metadata: Metadata = {
  title: "Flex Academy",
  description: "Flex Academy Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${roboto.variable}`}>
      <body className="min-h-screen">
        <NextIntlClientProvider>{children}</NextIntlClientProvider></body>
    </html>
  );
}
