import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Social Media Manager | Portfolio",
  description: "Don't Let Your Socials Stay Silent — Work With Me!",
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
        <div style={{ paddingTop: 60 }}>{children}</div>
      </body>
    </html>
  );
}
