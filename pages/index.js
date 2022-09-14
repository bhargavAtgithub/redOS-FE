import Head from "next/head";
import BioScreen from "./bio";

export default function Home() {
    return (
        <>
            <Head>
                <title>BHARGAV REDDY</title>
                <meta name="description" content="A learning playground." />
                <link rel="icon" href="/favicons/favicon.ico" />
            </Head>
            <BioScreen />
        </>
    );
}
