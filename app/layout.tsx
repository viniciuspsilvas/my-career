import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/app/main-layout";
import { Providers } from "./providers";
import { Metadata } from "next";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
const siteDescription =
  "Learn more about my experience, background, and expertise.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  icons: "/favicon.ico",
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: `${siteUrl}`,
    siteName: siteName,
    images: [
      {
        url: "/images/home-preview.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} Preview`,
      },
    ],
    locale: siteLocale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
