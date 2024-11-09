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
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/sam-vonbergen/">
                            <svg viewBox="-2 -2 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#e8eaed" stroke="#e8eaed" stroke-width="0.82">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect x="0" fill="none" width="20" height="20"></rect>
                                    <g> 
                                        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path>
                                    </g>
                                </g>
                            </svg>
                            Sam Vonbergen
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://bsky.app/profile/samthedev.bsky.social" className="bluesky-flutter">
                            <svg id="flutterby" className="bluesky-flutter" viewBox="0 0 566 500" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <path id="wing" fill="currentColor" d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z" />
                                </defs>
                                <use xlinkHref="#wing" className="left" />
                                <use xlinkHref="#wing" className="right" />
                            </svg>
                            @samthedev.bsky.social
                        </a>
                    </div>
                </footer>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
