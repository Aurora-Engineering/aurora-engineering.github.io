import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./site-refinements.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Aurora Engineering | Space Systems, Autonomy & Mission Science";
const description =
  "Aurora Engineering helps government, research, and aerospace teams develop autonomous systems, mission software, scientific instruments, models, and operational capabilities.";

const metadataBase = new URL("https://aurora-engineering.github.io");
const socialImage = new URL("/medos-autonomous-response.jpg", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: "Aurora Engineering",
  creator: "Aurora Engineering LLC",
  publisher: "Aurora Engineering LLC",
  category: "Aerospace engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  keywords: [
    "space systems engineering",
    "spacecraft autonomy",
    "NASA contractor",
    "flight software",
    "spacecraft operations",
    "scientific research",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Aurora Engineering",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 1280,
        height: 614,
        alt: "Aurora Engineering MEDOS autonomous spacecraft response concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
