import Link from "next/link";
import Layout from "../components/layout";
import ExperienceCard from '../components/experienceCard';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Experience() {
    const { data, error, isLoading } = useSWR('/api/experience', fetcher)

    if (error) return <div>Failed to load data</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return null

    return (
        <Layout>
            <h1>My Experience</h1>
            <Link href='/'>&#9001; Back</Link>

            {data.jobs.map((job) => {
                return <ExperienceCard
                    {...job}
                ></ExperienceCard>
            })}

        </Layout>
    )
}