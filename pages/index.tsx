// START: import-packages-components-etc
import { SHero, SProduct, SLocation } from '@/components';
import styled from 'styled-components';

// START: page
const Home = () => {
    return (
        <Main>
            <SHero />
            <SProduct />
            <SLocation />
        </Main>
    )
}
export default Home;

// START: styling
const Main = styled.main`

`;