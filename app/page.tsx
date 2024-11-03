import * as React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title} >Hi, I&#39;m Sam!</h1>
      <p className={styles.description} >
        Welcome to my portfolio!
      </p>

      <div>
        <Link href='experience' className={styles.card} >
          <h3>My Experience &rarr; </h3>
          <p> Find better descriptions of my work experience than on LinkedIn.</p>
        </Link>

        <Link href='projects' className={styles.card} >
          <h3>Personal Projects &rarr; </h3>
          <p> Demo projects I&#39;ve worked on and visit my GitHub.</p>
        </Link>

        <Link
          href='about'
          className={styles.card}
        >
          <h3>About Me &rarr; </h3>
          <p> Fun facts and a short bio! </p>
        </Link>

        <Link
          href='resources'
          className={styles.card}
        >
          <h3>Resources For You &rarr; </h3>
          <p>
            Things I&#39;ve found or created that worked for me - and I want to share them with you!
          </p>
        </Link>
      </div>
    </div>
  )
}
