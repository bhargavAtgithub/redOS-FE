import BioScreen from '../components/bio';
import Meta from '../components/meta';

export default function Home() {
    return (
        <>
            <Meta />
            <BioScreen />
        </>
    );
}

export async function getStaticProps(_context) {
    return {
        props: {},
    };
}