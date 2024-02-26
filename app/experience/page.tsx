import * as React from 'react';
import Link from 'next/link';
import ExperienceCard from '../components/experienceCard';
import { data } from '../../api/experience';

export default function Page() {
    return (
        <div>
            <h1>My Experience </h1>
            < Link href='/' >&#9001; Back </Link>
            {
                data.jobs.map((job, index) => {
                    return <ExperienceCard key={`job_${index}`} {...job}> </ExperienceCard>
                })
            }
        </div>
    )
}