import Link from "next/link";
import * as React from 'react';
import styles from '@/styles/Home.module.css';
import { data } from '_api/resources';
import ProjectCard from "../components/projectCard";

export default function Page() {
    return (
        <div>
            <h1 className={styles.title}>Resources</h1>
            <Link href='/'>&#9001; Back</Link>

            {
                data.resources.map((resource) => {
                    return <ProjectCard key={`resource_${resource.id}`} {...resource} ></ProjectCard>;
                })
            }
        </div>
    )
}