import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Hi, I'm Sam 👋
      </h1>

      <p className={styles.description}>
        Welcome to my portfolio!
      </p>

      <div>
        <Link href='experience' className={styles.card}>
          <h3>My Experience &rarr;</h3>
          <p>Find better descriptions of my work experience than on LinkedIn.</p>
        </Link>

        <Link href='projects' className={styles.card}>
          <h3>Personal Projects &rarr;</h3>
          <p>Demo projects I've worked on and visit my GitHub.</p>
        </Link>

        <Link
          href='about'
          className={styles.card}
        >
          <h3>About Me &rarr;</h3>
          <p>Fun facts and a short bio!</p>
        </Link>

        <Link
          href='resources'
          className={styles.card}
        >
          <h3>Resources For You &rarr;</h3>
          <p>
            Things I've found or created that worked for me - and I want to share them with you!
          </p>
        </Link>
      </div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}
