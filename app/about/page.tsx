import AboutPageClient from "./about-page-client";
// import { Metadata } from "next";

// const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
// const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
// const siteDescription =
//   "Learn more about my experience, background, and expertise.";

// export const metadata: Metadata = {
//   title: `About Me | ${siteName}`,
//   description: siteDescription,
//   icons: "/favicon.ico",
//   openGraph: {
//     title: `About Me | ${siteName}`,
//     description: siteDescription,
//     url: `${siteUrl}/about`,
//     siteName: siteName,
//     images: [
//       {
//         url: "/images/about-preview.jpg",
//         width: 1200,
//         height: 630,
//         alt: "About Me Page Preview"
//       }
//     ],
//     locale: siteLocale,
//     type: "website"
//   }
// };

export default function AboutPage() {
  return <AboutPageClient />;
}
