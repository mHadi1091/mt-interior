import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const siteUrl = "https://mt-interior.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
  ];
}
