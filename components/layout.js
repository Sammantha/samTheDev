import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sam Sadler</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}
