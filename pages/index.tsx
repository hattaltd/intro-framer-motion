// START: import-packages-components-etc
import { SHero, SProduct, SBenefits } from '@/components';
import styled from 'styled-components';

// START: page
const Home = () => {
    return (
        <Main>
            <SHero />
            <SBenefits />
            {/* <SProduct /> */}
        </Main>
    )
}
export default Home;

// START: styling
const Main = styled.main`

`;