// START: import-packages
import { Container } from '../index';
import styled from 'styled-components';

// START: section-location
const Location = () => {
    return (
        <SLocation>
            <Container>
                <p>This is location section</p>
            </Container>
        </SLocation>
    )
}
export default Location;

// START: styling
const SLocation = styled.section`
  min-height: 100vh;
`;