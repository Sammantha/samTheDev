import Link from "next/link";
import Layout from "../components/layout";

export default function Resources(params) {
    return (
        <Layout>
            <h1>Resources For You</h1>
            <Link href='/'>&#9001; Back</Link>
        </Layout>
    )
}