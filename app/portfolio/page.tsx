import { Metadata } from "next";
import PortfolioPageClient from "./portfolio-page-client";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
const siteDescription = "Discover my projects and professional work.";

const metadata: Metadata = {
  title: `Portfolio | ${siteName}`,
  description: siteDescription,
  icons: "/favicon.ico",
  openGraph: {
    title: `Portfolio | ${siteName}`,
    description: siteDescription,
    url: `${siteUrl}/portfolio`,
    siteName: siteName,
    images: [
      {
        url: "/images/portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Page Preview"
      }
    ],
    locale: siteLocale,
    type: "website"
  }
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
