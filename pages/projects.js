import Link from "next/link";
import Layout from "../components/layout";

export default function Projects(params) {
    return (
        <Layout>
            <h1>Personal Projects</h1>
            <Link href='/'>&#9001; Back</Link>
        </Layout>
    )
}