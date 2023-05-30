import Link from "next/link";
import Layout from "../components/layout";

export default function About(params) {
    return (
        <Layout>
            <h1>About Me</h1>
            <Link href='/'>&#9001; Back</Link>
        </Layout>
    )
}