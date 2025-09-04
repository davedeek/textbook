import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Literata } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import type { ReactNode } from 'react';

const inter = Literata({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Analytics />
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
