// START: import-packages-components-etc
import { SHero, SProduct, SBenefits } from '@/components';
import Head from 'next/head';
import styled from 'styled-components';

// START: page
const Home = () => {
    return (
        <>
            <Head>
                <title>Intro | Framer Motion</title>
            </Head>
            <Main>
                <SHero />
                <SBenefits />
                {/* <SProduct /> */}
            </Main>
        </>
    )
}
export default Home;

// START: styling
const Main = styled.main`

`;