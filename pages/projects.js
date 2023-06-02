import Link from "next/link";
import Layout from "../components/layout";
import { Button } from '@mui/material';
import useSWR from 'swr';
import ProjectCard from "../components/projectCard";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Projects() {
    const { data, error, isLoading } = useSWR('/api/projects', fetcher)

    if (error) return <div>Failed to load data</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        <Layout>
            <h1>Personal Projects</h1>
            <Link href='/'>&#9001; Back</Link>

            <Button className={styles.gitHubButton} size="small">
                <Link className={styles.noDecor} href="https://github.com/Sammantha" target="_blank">
                    <Image
                        alt="github logo"
                        src="/images/github.png"
                        width="30"
                        height="30"
                    />
                    My GitHub
                </Link>
            </Button>

            {data.projects.map((project) => {
                return (
                    <ProjectCard key={`project_${project.id}`} {...project}>
                        <div >Demo of the project will live here!</div>
                    </ProjectCard>
                )
            })}


        </Layout>
    )
}