import ProjectPageClient from "./project-page-client";
// import { Metadata } from "next";

// const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
// const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
// const siteDescription = "Explore my latest blog posts and insights.";

// export const metadata: Metadata = {
//   title: `Project | ${siteName}`,
//   description: siteDescription,
//   icons: "/favicon.ico",
//   openGraph: {
//     title: `Project | ${siteName}`,
//     description: siteDescription,
//     url: `${siteUrl}/blog`,
//     siteName: siteName,
//     images: [
//       {
//         url: "/images/blog-preview.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Project Page Preview"
//       }
//     ],
//     locale: siteLocale,
//     type: "website"
//   }
// };

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <ProjectPageClient id={id} />;
}
