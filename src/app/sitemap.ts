import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://furnit-pro.vercel.app/", lastModified: new Date() },
    { url: "https://furnit-pro.vercel.app/ua", lastModified: new Date() },
    { url: "https://furnit-pro.vercel.app/en", lastModified: new Date() },
  ];
}
