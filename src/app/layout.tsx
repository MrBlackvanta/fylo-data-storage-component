import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://fylo-data-storage-component.abdelrhman-ahmed8881.workers.dev";

const name = "Fylo Data Storage";
const title = `${name} | Storage usage at a glance`;
const description =
  "Fylo's storage dashboard component: 815 GB of 1000 GB used, 185 GB left, with quick actions for documents, folders and uploads.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "A dark dashboard card showing 815 GB of 1000 GB storage used, with 185 GB left.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c122c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
