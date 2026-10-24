import type { ReactNode } from 'react';
import { Shippori_Mincho, Mulish } from 'next/font/google';
import logo from '../public/images/logo.png';
import './globals.css';

// Polices : uniquement les graisses utilisées, sous-ensemble latin seul (pas de japonais).
const shippori = Shippori_Mincho({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-shippori',
});

const mulish = Mulish({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
});

// Domaine final du site (URL absolue en https, sans slash final), à renseigner avant la mise en ligne.
// Tant qu'il est vide, canonical, og:url, og:image et les URLs absolues du JSON-LD ne sont pas émis.
const SITE_URL = '' as string;
const hasSiteUrl = /^https:\/\/[^/]+/.test(SITE_URL);
const toAbsolute = (path: string): string => (hasSiteUrl ? new URL(path, SITE_URL).toString() : path);

const PLATFORM_URL = 'https://platform.yumco.fr/sola-7';

const title = 'sola – Restaurant japonais à Claye-Souilly';
const description =
  'sola, restaurant japonais à Claye-Souilly (77) : sushis, ramen, gyoza et donburi sur place, à emporter ou en commande en ligne. Réservez votre table !';
const ogDescription =
  'sola, la cuisine japonaise tout en douceur à Claye-Souilly : sushis, ramen et bols chauds sur place, à emporter ou en commande en ligne. Ouvert du mardi au dimanche, midi et soir.';

const keywords: string[] = [
  'restaurant japonais Claye-Souilly',
  'japonais Claye-Souilly',
  'sushi Claye-Souilly',
  'ramen Claye-Souilly',
  'japonais à emporter Claye-Souilly',
  'commande en ligne japonais 77410',
  'réserver restaurant Claye-Souilly',
  'restaurant rue Jean Jaurès Claye-Souilly',
  'restaurant japonais Seine-et-Marne',
  'gyoza',
  'chirashi',
  'donburi',
  'mochi',
  'sola restaurant',
];

// Image de partage : à remplacer par un visuel 1200×630 (logo sur fond #F6EFE8) dès qu'il sera fourni.
const ogImages = hasSiteUrl
  ? [
      {
        url: toAbsolute(logo.src),
        width: logo.width,
        height: logo.height,
        alt: 'Logo de sola, restaurant japonais à Claye-Souilly',
      },
    ]
  : undefined;

export const metadata = {
  metadataBase: hasSiteUrl ? new URL(SITE_URL) : null,
  title,
  description,
  keywords,
  alternates: hasSiteUrl ? { canonical: toAbsolute('/') } : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description: ogDescription,
    type: 'website' as const,
    locale: 'fr_FR',
    siteName: 'sola',
    url: hasSiteUrl ? toAbsolute('/') : undefined,
    images: ogImages,
  },
  twitter: {
    card: 'summary_large_image' as const,
    title,
    description: ogDescription,
    images: ogImages ? ogImages.map((image) => image.url) : undefined,
  },
  icons: {
    icon: [{ url: logo.src, type: 'image/png' }],
    apple: [{ url: logo.src }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6EFE8',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'sola',
  ...(hasSiteUrl ? { url: toAbsolute('/') } : {}),
  servesCuisine: 'Japonais',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3 rue Jean Jaurès',
    postalCode: '77410',
    addressLocality: 'Claye-Souilly',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  telephone: '+33776020761',
  email: 'marinesola348@gmail.com',
  logo: toAbsolute(logo.src),
  image: toAbsolute(logo.src),
  acceptsReservations: true,
  hasMenu: PLATFORM_URL,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '14:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '19:00',
      closes: '22:30',
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${shippori.variable} ${mulish.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
