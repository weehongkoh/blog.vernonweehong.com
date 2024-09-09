import { Metadata } from "next";

import { PostProp } from "@/types/Post";

export const generatePostMetadata = async (
  data: PostProp,
): Promise<Metadata> => {
  return {
    title: data.title,
    description: data.excerpt,
    robots:
      process.env.NODE_ENV === "production"
        ? "index, follow"
        : "noindex, nofollow",
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
    icons: {
      icon: "/icon?<generated>",
      apple: "/apple-icon?<generated>",
    },
    openGraph: {
      title: data.title,
      description: data.excerpt,
      url: process.env.NEXT_PUBLIC_URL!,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL!}/post/${data.slug}`,
    },
    other: {
      htmlLang: "en-US",
    },
  };
};

export const generateJsonLd = (data: PostProp) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_URL!}/post/${data.slug}`,
    },
    headline: data.title,
    description: data.excerpt,
    author: {
      "@type": "Person",
      name: "Vernon Wee Hong KOH",
    },
    publisher: {
      "@type": "Organization",
      name: "Vernon Wee Hong KOH",
    },
    datePublished: data.date_created,
    dateModified: data.date_updated,
  };
};
