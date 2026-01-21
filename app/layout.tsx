import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://vasilii-b.github.io/vr-games-grid'),
  title: "Play Zone VR Games - Jocuri VR pentru Copii și Adulți | Glodeni, Iași, România",
  description: "Explorează cele mai bune jocuri VR la Play Zone Glodeni! Jocuri pentru copii, shootere, horror și curse. Teren de joacă VR modern cu trailers și descrieri complete.",
  keywords: ["VR games", "jocuri VR", "VR Iași", "VR Glodeni", "play zone", "teren de joacă", "copii", "Meta Quest", "realitate virtuală", "VR pentru copii", "jocuri VR România"],
  authors: [{ name: "Play Zone VR" }],
  creator: "Play Zone VR",
  publisher: "Play Zone VR",
  alternates: {
    canonical: "https://vasilii-b.github.io/vr-games-grid/",
    languages: {
      'ro-RO': 'https://vasilii-b.github.io/vr-games-grid/',
      'ru-RU': 'https://vasilii-b.github.io/vr-games-grid/',
      'en-US': 'https://vasilii-b.github.io/vr-games-grid/',
    },
  },
  openGraph: {
    title: "Play Zone VR Games - Jocuri VR Glodeni",
    description: "Explorează cele mai bune jocuri VR la Play Zone Glodeni! Jocuri pentru copii, shootere, horror și curse.",
    url: "https://vasilii-b.github.io/vr-games-grid/",
    siteName: "Play Zone VR Games",
    locale: "ro_RO",
    alternateLocale: ["ru_RU", "en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Play Zone VR Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Zone VR Games - Jocuri VR Glodeni",
    description: "Explorează cele mai bune jocuri VR la Play Zone Glodeni! Jocuri pentru copii, shootere, horror și curse.",
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
              "@id": "https://vasilii-b.github.io/vr-games-grid/",
              "name": "Play Zone Glodeni - Teren de Joacă VR",
              "image": "https://vasilii-b.github.io/vr-games-grid/og-image.jpg",
              "description": "Centru modern de jocuri VR pentru copii și adulți cu o gamă largă de jocuri: adventure, shootere, horror, racing și multe altele. Localizat în Glodeni, Iași.",
              "url": "https://vasilii-b.github.io/vr-games-grid/",
              "telephone": "+40-xxx-xxx-xxx", // TODO: Replace with actual business phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Glodeni",
                "addressLocality": "Glodeni",
                "addressRegion": "Iași",
                "postalCode": "707340",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.7780905,
                "longitude": 27.5157528
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
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
                "ratingValue": "4.5",
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
