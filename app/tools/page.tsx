import { Metadata } from "next";
import ToolsPageClient from "./tools-page-client";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
const siteDescription = "Explore the tools and resources I use.";

const metadata: Metadata = {
  title: `Tools | ${siteName}`,
  description: siteDescription,
  icons: "/favicon.ico",
  openGraph: {
    title: `Tools | ${siteName}`,
    description: siteDescription,
    url: `${siteUrl}/tools`,
    siteName: siteName,
    images: [
      {
        url: "/images/tools-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tools Page Preview"
      }
    ],
    locale: siteLocale,
    type: "website"
  }
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
