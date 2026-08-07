import type { Metadata, Viewport } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guildry.com"),
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
  authors: [{ name: "Guildry", url: "https://guildry.com" }],
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
    url: "https://guildry.com",
    siteName: "Guildry.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
