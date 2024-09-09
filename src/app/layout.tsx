import "@/styles/globals.scss";

import type { Metadata } from "next";
import localFont from "next/font/local";

const saans = localFont({
  src: [
    {
      path: "../fonts/SaansVF.woff2",
    },
  ],
  variable: "--font-saans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "Vernon Wee Hong KOH - Code Chronicles",
  description:
    "Welcome to Vernon Wee Hong KOH's Code Chronicles! Join me on a journey through software development, where I share tutorials, tech insights, and explorations into new technologies. Follow along as I navigate coding challenges and delve into the evolving world of web and software development.",
  openGraph: {
    title: "Vernon Wee Hong KOH - Code Chronicles",
    description:
      "Welcome to Vernon Wee Hong KOH's Code Chronicles! Join me on a journey through software development, where I share tutorials, tech insights, and explorations into new technologies. Follow along as I navigate coding challenges and delve into the evolving world of web and software development.",
    images: "/images/profile.jpg",
    url: "https://blog.vernonweehong.com",
    type: "website",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL ?? "https://blog.vernonweehong.com",
  ),
  twitter: {
    card: "summary_large_image",
    site: "@vernonweehong",
    title: "Vernon Wee Hong KOH - Code Chronicles",
    description:
      "Welcome to Vernon Wee Hong KOH's Code Chronicles! Join me on a journey through software development, where I share tutorials, tech insights, and explorations into new technologies. Follow along as I navigate coding challenges and delve into the evolving world of web and software development.",
    images: "/images/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={saans.variable}>
      <body>{children}</body>
    </html>
  );
}
