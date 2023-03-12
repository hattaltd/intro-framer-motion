// START: import-packages
import { Container } from '../index';
import styled from 'styled-components';

// START: section-product
const Product = () => {
    return (
        <SProduct>
            <Container>
                <p>This is product section</p>
            </Container>
        </SProduct>
    )
}
export default Product;

// START: styling
const SProduct = styled.section`
  min-height: 100vh;
`;