import * as React from 'react';
import Link from 'next/link';
import ExperienceCard from '../components/experienceCard';
import { data } from '../../_api/experience';
import styles from '@/styles/Home.module.css';

export default function Page() {
    return (
        <div>
            <h1 className={styles.title}>My Experience </h1>
            < Link href='/' >&#9001; Back </Link>
            {
                data.jobs.map((job, index) => {
                    return <ExperienceCard key={`job_${index}`} {...job}> </ExperienceCard>
                })
            }
        </div>
    )
}