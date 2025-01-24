import { getMetadata } from '@/app/_services/getMetadata.service';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const DefaultFont = localFont({
  src: '../public/fonts/Default.ttf',
  variable: '--font-default',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://d1mviimjnzagon.cloudfront.net/fonts/esthentic/v1/esthentic.css"></link>
      </head>
      <body
        className={`
          ${DefaultFont.className} ${DefaultFont.variable}
          ${geistSans.variable} ${geistMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
