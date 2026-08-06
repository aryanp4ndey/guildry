import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guildry — Premium Websites for Businesses That Want to Grow",
  description: "Bespoke, high-performance website design and engineering for Gyms, Clinics, Restaurants, Salons, Real Estate, and Startups.",
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
