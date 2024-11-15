import * as React from 'react';
import Link from "next/link";
import { Button } from '@mui/material';
import ProjectCard from "../components/projectCard";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { data } from '_api/projects';

export default function Page() {
    return (
        <div>
            <h1 className={styles.title}>Personal Projects</h1>
            <Link href='/' >&#9001; Back </Link>
            <Button className={styles.gitHubButton} size="small" >
                <Link className={styles.noDecor} href="https://github.com/Sammantha" target="_blank" >
                    <Image
                        alt="Github logo"
                        src="/images/github.png"
                        width={30}
                        height={30}
                    />
                    My GitHub
                </Link>
            </Button>

            {
                data.projects.map((project) => {
                    return (
                        <ProjectCard key={`project_${project.id}`} {...project} >
                            Demo of the project will live here!
                        </ProjectCard>
                    )
                })
            }
        </div>
    )
}