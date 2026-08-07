import type { Metadata, Viewport } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://guildrystudio.vercel.app";

const ogImageUrl = `${siteUrl}/og-image.jpg`;
const ogImagePngUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Guildry. — Premium Websites. Real Results.",
    template: "%s | Guildry.",
  },
  description:
    "We design and build bespoke, ultra-fast websites for ambitious local businesses, startups, and growing brands that want to stand out and convert visitors into customers.",
  keywords: [
    "Guildry",
    "Premium Web Design",
    "Custom Website Development",
    "High Converting Websites",
    "Web Engineering Agency",
    "Bespoke Digital Agency",
  ],
  authors: [{ name: "Guildry", url: siteUrl }],
  creator: "Guildry",
  publisher: "Guildry",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Guildry. — Premium Websites. Real Results.",
    description:
      "We design and build bespoke, ultra-fast websites for ambitious local businesses, startups, and growing brands that want to stand out and convert visitors into customers.",
    url: siteUrl,
    siteName: "Guildry.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Guildry — Premium Websites. Real Results.",
        type: "image/jpeg",
      },
      {
        url: ogImagePngUrl,
        width: 1200,
        height: 630,
        alt: "Guildry — Premium Websites. Real Results.",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guildry. — Premium Websites. Real Results.",
    description:
      "We design and build bespoke, ultra-fast websites for ambitious local businesses, startups, and growing brands that want to stand out and convert visitors into customers.",
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <meta property="og:title" content="Guildry. — Premium Websites. Real Results." />
        <meta property="og:description" content="We design and build bespoke, ultra-fast websites for ambitious local businesses, startups, and growing brands that want to stand out and convert visitors into customers." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Guildry." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:url" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guildry. — Premium Websites. Real Results." />
        <meta name="twitter:description" content="We design and build bespoke, ultra-fast websites for ambitious local businesses, startups, and growing brands that want to stand out and convert visitors into customers." />
        <meta name="twitter:image" content={ogImageUrl} />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased overflow-x-hidden w-full max-w-full">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
