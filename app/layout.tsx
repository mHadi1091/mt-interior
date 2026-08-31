import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    {
      path: "./fonts/Fraunces-Roman.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Fraunces-Italic.ttf",
      style: "italic",
    },
  ],
});

const inter = localFont({
  variable: "--font-body",
  display: "swap",
  src: "./fonts/Inter-Variable.ttf",
});

const siteUrl = "https://mt-interior.example.com";
const title = "M.T Interior & Home Services — Aluminum, Glass & Interior Fit-Out";
const description =
  "Gypsum partitions, glass partitions, aluminum & drywall systems, cement partitions, false ceilings and full interior fit-outs. Lahore based. Free consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — M.T Interior & Home Services",
  },
  description,
  keywords: [
    "interior design Lahore",
    "aluminum partition Lahore",
    "glass partition",
    "gypsum ceiling",
    "false ceiling Lahore",
    "drywall partition",
    "cement partition",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "M.T Interior & Home Services",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "M.T Interior & Home Services",
  description,
  telephone: "+92-320-1983176",
  email: "Mr.tayyabaz.1864934@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chandrawan Road Chungi Amar Sidhu, Johar Town, Shadiwal Chowk",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  url: siteUrl,
  slogan: "Elegance · Quality · Home Solutions",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
