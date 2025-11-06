import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Figtree } from "next/font/google";
import "./globals.css";

const primary = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const secondary = Figtree({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-d6756272.vercel.app"),
  title:
    "Agentic Marketing Intelligence | Premium Competitive Tool Experience",
  description:
    "Comprehensive competitive UX and SEO teardown with a next-generation, AI-augmented product vision engineered for elite tool-based web experiences.",
  keywords: [
    "competitive analysis",
    "UX research",
    "SEO strategy",
    "tool directory",
    "AI product design",
    "conversion optimization",
  ],
  openGraph: {
    title: "Agentic Marketing Intelligence — Premium Tool Experience Blueprint",
    description:
      "Deconstruct competitor UX/SEO patterns and explore an elevated, AI-enhanced site vision built for speed, conversions, and organic growth.",
    url: "https://agentic-d6756272.vercel.app",
    siteName: "Agentic Marketing Intelligence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Marketing Intelligence | Competitive UX & SEO Blueprint",
    description:
      "Premium site concept with AI engagement layers, faster performance, and superior search visibility.",
  },
  alternates: {
    canonical: "https://agentic-d6756272.vercel.app",
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
    <html lang="en">
      <body className={`${primary.variable} ${secondary.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
