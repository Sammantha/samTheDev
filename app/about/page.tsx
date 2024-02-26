import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
// import ImageCarousel from '@/components/imageCarousel';

export default function Page() {
    return (
        <div>
            <h1 className={styles.title}>About Me</h1>
            <Link href='/'>&#9001; Back</Link>
            <Image
                alt="A word cloud of common words Sam would describe herself with, like gardener, zoo member, and artist."
                src={'/images/wordcloud.png'}
                width="800"
                height="500"
                priority={true}
            />

            <div>
                <p>
                    I live in the largest city in the state of Montana, Billings, boasting a population of 100,000.
                    I&lsquo;ve lived in Billings for 12 years, and it has truly become my home.
                    I went to college here and started my career in the heart of Downtown.
                    I enjoy the farmer&lsquo;s markets in the summer and making various snow animals in the winter.
                    I love it here and I don&lsquo;t think I&lsquo;ll ever leave!
                </p>
                Favorite local:
                <ul>
                    <li>coffee shop: City Brew Coffee</li>
                    <li>pizza: Godfather&lsquo;s Pizza</li>
                    <li>burger: The Burger Dive</li>
                </ul>
                <p>
                    Art has always been a passion of mine.
                    Every medium: acrylic, watercolor, yarn, felt, henna, dance, florals, baking, you name it.
                    Here&lsquo;s some examples of my art:
                </p>
                {/* <ImageCarousel /> */}
            </div>
        </div>
    )
}