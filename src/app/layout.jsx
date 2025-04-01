import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoaib Mushtaq Bhat | Full-Stack Web Developer",
  description:
    "Professional portfolio of Shoaib Mushtaq Bhat, a Full-Stack Web Developer specializing in React, Next.js, and modern web technologies.",
  keywords:
    "web developer, full stack developer, react developer, node.js developer, portfolio",
  authors: [{ name: "Shoaib Mushtaq Bhat" }],
  creator: "Shoaib Mushtaq Bhat",
  publisher: "Shoaib Mushtaq Bhat",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Shoaib Mushtaq Portfolio",
    title: "Shoaib Mushtaq Bhat | Full-Stack Web Developer",
    description:
      "Portfolio website of Shoaib Mushtaq Bhat, a Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoaib Mushtaq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Mushtaq Bhat | Full-Stack Web Developer",
    description:
      "Portfolio website of Shoaib Mushtaq Bhat, a Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#111827",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden text-gray-300 antialiased selection:bg-cyan-400 selection:text-gray-900 bg-gray-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
