import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.HOST_APP_URL}`),
  title: 'Cek Khodam',
  description: 'Cek khodam yang ada di dalam diri kamu',
  keywords: ['Chek Khodam', 'Khodam', 'Kodam'],
  authors: [{ name: 'Maruu', url: 'https://maruhodo.id' }],
  creator: 'Maruu',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Cek Khodam',
    description: 'Cek khodam yang ada di dalam diri kamu',
    url: `${process.env.HOST_APP_URL}/`,
    siteName: 'Cek Khodam',
    images: [
      {
        url: `${process.env.HOST_APP_URL}/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'Cek Khodam',
    title: "Cek Khodam",
    description: "Cek khodam yang ada di dalam diri kamu",
    creator: 'Cek Khodam',
    images: {
      url: `${process.env.HOST_APP_URL}/og.png`,
      alt: 'Preview image for Cek Khodam',
    }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
