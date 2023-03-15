// START: import-packages
import { Container } from './index';
import styled from 'styled-components';

// START: component-header
const Header = () => {
    return(
        <SHeader>
            <Container
                maxWidth="1760px"
            >
                <Navbar>
                    <h3>Logo Co</h3>
                    <ul>
                        {   ["Home", "Product", "Location"].map((i, index) =>
                            <li
                                key={index}
                            >
                                {i}
                            </li>
                        )}
                    </ul>
                </Navbar>
            </Container>
        </SHeader>
    )
}
export default Header;

// START: styling
const SHeader = styled.header`
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;

    width: 100%;
    
    /* background-color: #4e4d4d; */
    color: #fafafa;
    padding: 25px 0;
`;

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 26px;
        font-weight: 700;
        color: #d1f5a8;
    }

    ul {
        display: flex;
        gap: 0 32px;

        font-size: 20px;
        font-weight: 500;
    }
`;
