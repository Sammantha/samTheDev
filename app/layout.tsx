import * as React from 'react';
import styles from '@/styles/Home.module.css';
import { Metadata } from 'next'
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: 'Sam VonBergen',
}

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main role='main'>
                    <div className={styles.container}>{children}</div>
                </main>
                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <Image src="/vercel.svg" alt="Vercel" className={styles.logo} width={283} height={64} />
                    </a>
                </footer>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
