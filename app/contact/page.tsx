import ContactPageClient from "./contact-page-client";
// import { Metadata } from "next";

// const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
// const siteLocale = process.env.NEXT_PUBLIC_SITE_LOCALE || "";
// const siteDescription = "Get in touch with me through the contact page.";

// export const metadata: Metadata = {
//   title: `Contact | ${siteName}`,
//   description: siteDescription,
//   icons: "/favicon.ico",
//   openGraph: {
//     title: `Contact | ${siteName}`,
//     description: siteDescription,
//     url: `${siteUrl}/contact`,
//     siteName: siteName,
//     images: [
//       {
//         url: "/images/contact-preview.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Contact Page Preview"
//       }
//     ],
//     locale: siteLocale,
//     type: "website"
//   }
// };

export default function ContactPage() {
  return <ContactPageClient />;
}
