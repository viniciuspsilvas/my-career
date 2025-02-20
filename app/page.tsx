import { Metadata } from "next";
import HomePageClient from "./home-page-client";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
const siteDescription =
  "Welcome to my personal website, showcasing my portfolio, blog, and more.";

const metadata: Metadata = {
  title: `Home | ${siteName}`,
  description: siteDescription,
  icons: "/favicon.ico",
  openGraph: {
    title: `Home | ${siteName}`,
    description: siteDescription,
    url: `${siteUrl}`,
    siteName: siteName,
    images: [
      {
        url: "/images/home-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Home Page Preview"
      }
    ],
    locale: siteLocale,
    type: "website"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
