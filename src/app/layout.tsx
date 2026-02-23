import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Virtually Hana | Social Media Manager & Strategist",
  description:
    "Hana is a social media manager and strategist helping brands grow their online presence through creative content, strategy, and data-driven results.",
  keywords: [
    "social media manager",
    "content creator",
    "brand strategy",
    "Instagram growth",
    "virtually hana",
    "social media strategy Philippines",
  ],
  authors: [{ name: "Virtually Hana" }],
  openGraph: {
    title: "Virtually Hana | Social Media Manager & Strategist",
    description:
      "Don't let your socials stay silent — work with Hana to grow your brand.",
    url: "https://www.virtuallyhana.co",
    siteName: "Virtually Hana",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtually Hana | Social Media Manager",
    description: "Don't let your socials stay silent — work with Hana.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingTop: 68, overflowX: "hidden", width: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
