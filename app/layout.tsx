import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://vasilii-b.github.io/vr-games-grid'),
  title: "PlayZone VR Games - Jocuri VR pentru Copii și Adulți | Glodeni, Republica Moldova",
  description: "Explorează cele mai bune jocuri VR la PlayZone Glodeni! Jocuri pentru copii, shootere, horror și curse. Teren de joacă și VR modern cu cele mai noi jocuri.",
  keywords: ["VR games", "jocuri VR", "VR Glodeni", "play zone", "teren de joacă", "copii", "Meta Quest", "realitate virtuală", "VR pentru copii", "jocuri VR Republica Moldova", "VR Romania", "shootere VR", "jocuri horror VR", "jocuri curse VR"],
  authors: [{ name: "PlayZone Glodeni" }],
  creator: "PlayZone Glodeni",
  publisher: "PlayZone Glodeni",
  alternates: {
    canonical: "https://playzone-vr-games.vercel.app/",
    languages: {
      'ro-RO': 'https://playzone-vr-games.vercel.app/',
      'ru-RU': 'https://playzone-vr-games.vercel.app/',
      'en-US': 'https://playzone-vr-games.vercel.app/',
    },
  },
  openGraph: {
    title: "PlayZone VR Games - Jocuri VR Glodeni",
    description: "Explorează cele mai bune jocuri VR la PlayZone Glodeni! Jocuri pentru copii, shootere, horror și curse.",
    url: "https://playzone-vr-games.vercel.app/",
    siteName: "PlayZone Glodeni VR Games",
    locale: "ro_RO",
    alternateLocale: ["ru_RU", "en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlayZone Glodeni VR Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayZone Glodeni - Jocuri VR pentru Copii și Adulți",
    description: "Explorează cele mai bune jocuri VR la PlayZone Glodeni! Jocuri pentru copii, shootere, horror și curse.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // TODO: Replace with actual Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://playzone-vr-games.vercel.app/",
              "name": "PlayZone Glodeni - Teren de Joacă VR",
              "image": "https://playzone-vr-games.vercel.app/og-image.jpg",
              "description": "Centru modern de jocuri VR pentru copii și adulți cu o gamă largă de jocuri: adventure, shootere, horror, racing și multe altele. Localizat în Glodeni, Republica Moldova.",
              "url": "https://playzone-vr-games.vercel.app/",
              "telephone": "+373 607 888 41",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ștefan cel Mare, 22",
                "addressLocality": "Glodeni",
                "addressRegion": "Glodeni",
                "postalCode": "2049",
                "addressCountry": "MD"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.7780905,
                "longitude": 27.5157528
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "21:00"
                }
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.google.com/maps/place/Play+Zone+-+teren+de+joaca+copii/@47.7730549,27.5192833,14778m/data=!3m1!1e3!4m6!3m5!1s0x40cb4fadaed0b71d:0xaa65c5c4b3af2ab8!8m2!3d47.7780905!4d27.5157528!16s%2Fg%2F11mt49cbs5",
                "https://www.facebook.com/people/PlayZone-Glodeni/61584578198286/",
                "https://www.instagram.com/playzone_glodeni/",
                "https://www.tiktok.com/@playzone.glodeni1"
              ],
              "aggregateRating": { // TODO: Replace with actual ratings from customer reviews
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "100"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "VR Gaming Equipment",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Kid-Friendly Games",
                  "value": true
                }
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
