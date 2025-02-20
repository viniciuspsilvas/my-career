import { Metadata } from "next";
import BlogPageClient from "./blog-page-client";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
const siteDescription = "Explore my latest blog posts and insights.";

const metadata: Metadata = {
  title: `Blog | ${siteName}`,
  description: siteDescription,
  icons: "/favicon.ico",
  openGraph: {
    title: `Blog | ${siteName}`,
    description: siteDescription,
    url: `${siteUrl}/blog`,
    siteName: siteName,
    images: [
      {
        url: "/images/blog-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Page Preview"
      }
    ],
    locale: siteLocale,
    type: "website"
  }
};

export default function BlogPage() {
  return <BlogPageClient />;
}
