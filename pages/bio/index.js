import React from 'react';
import Bio from '../../components/bio';

const BioScreen = () => <Bio />;

export default BioScreen;

export async function getStaticProps(_context) {
    return {
        props: {},
    };
}
