import * as React from 'react';
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Newsreader } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import './globals.css';
 
// If loading a variable font, you don't need to specify the font weight
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
    title: 'Sam VonBergen',
}

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={newsreader.className}>
            <body>
                <main role='main'>
                    <div className={styles.container}>{children}</div>
                </main>
                <footer>
                </footer>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
