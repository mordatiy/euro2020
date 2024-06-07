import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Teams",
};

export const revalidate = 10;

export default async function Blog() {
    // const posts = await getAllPosts();

    return (
        <>
            <h1>Teams</h1>

            <ul className="posts">
                <h3>
                <Link href={`/teams/ukr`}>Ukraine</Link></h3>
            </ul>
            <ul className="posts">
                <h3>
                    <Link href={`/teams/SUI`}>Switzerland</Link></h3>
            </ul>

        </>
    );
}