import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vasilii-b.github.io/vr-games-grid',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ro: 'https://vasilii-b.github.io/vr-games-grid',
          ru: 'https://vasilii-b.github.io/vr-games-grid',
          en: 'https://vasilii-b.github.io/vr-games-grid',
        },
      },
    },
  ]
}
