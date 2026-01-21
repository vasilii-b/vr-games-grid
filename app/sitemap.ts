import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://playzone-vr-games.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ro: 'https://playzone-vr-games.vercel.app/',
          ru: 'https://playzone-vr-games.vercel.app/',
          en: 'https://playzone-vr-games.vercel.app/',
        },
      },
    },
  ]
}
