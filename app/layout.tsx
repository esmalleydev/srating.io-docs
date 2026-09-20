import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import Script from 'next/script';
import type { Metadata } from 'next';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import './global.css';

const DESCRIPTION =
  'Sports data API for college basketball and college football: live scores, live odds, box scores, advanced stats, elo ratings, predictions and rankings.';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.srating.io'),
  title: {
    default: 'srating.io API Documentation',
    template: '%s – srating.io API',
  },
  description: DESCRIPTION,
  applicationName: 'srating.io API',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://docs.srating.io',
    siteName: 'srating.io API Documentation',
    title: 'srating.io API Documentation',
    description: DESCRIPTION,
    images: [{ url: '/logo512.png', width: 512, height: 512, alt: 'srating.io' }],
  },
  twitter: {
    card: 'summary',
    title: 'srating.io API Documentation',
    description: DESCRIPTION,
    images: ['/logo512.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11331182972" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11331182972');`}
        </Script>
        <RootProvider>
          <DocsLayout
            tree={source.getPageTree()}
            {...baseOptions()}
            // full-width header, so search / links / GitHub sit up top rather
            // than inside the sidebar. Must come after the spread to win.
            nav={{ ...baseOptions().nav, mode: 'top' }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
