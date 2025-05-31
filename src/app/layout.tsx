import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Femmy - Ayollar uchun mobil ilova',
  description:
    "Femmy - Ayollar uchun mobil ilova, ayollar salomatligi va homiladorlik haqida ma'lumotlar.",
  keywords: [
    'Femmy',
    'Ayollar uchun ilova',
    'Ayollar salomatligi',
    'Homiladorlik',
    "Ayollar sog'lig'i",
    'Ayollar uchun maslahatlar',
    "Ayollar uchun qo'llanma",
    'Ayollar uchun resurslar',
    'Ayollar uchun mobil ilova',
  ],
  authors: [
    {
      name: 'Femmy',
      url: 'https://femmy.uz',
    },
  ],
  creator: 'Femmy',
  openGraph: {
    title: 'Femmy - Ayollar uchun mobil ilova',
    description:
      "Femmy - Ayollar uchun mobil ilova, ayollar salomatligi va homiladorlik haqida ma'lumotlar.",
    url: 'https://femmy.uz',
    siteName: 'Femmy',
    images: [
      {
        url: 'https://femmy.uz/assets/logo/femmyLogo.png',
        width: 1200,
        height: 630,
        alt: 'Femmy - Ayollar uchun mobil ilova',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Femmy - Ayollar uchun mobil ilova',
    description:
      "Femmy - Ayollar uchun mobil ilova, ayollar salomatligi va homiladorlik haqida ma'lumotlar.",
    images: ['https://femmy.uz/assets/logo/femmyLogo.png'],
  },
  icons: {
    icon: '/assets/logo/loaderLogo.svg',
    shortcut: '/assets/logo/femmyLogo.png',
    apple: '/assets/logo/femmyLogo.png',
  },
  // manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Femmy - Ayollar uchun mobil ilova',
    startupImage: '/assets/logo/femmyLogo.png',
    statusBarStyle: 'default',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,
  },
  applicationName: 'Femmy',
  publisher: 'Femmy',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
