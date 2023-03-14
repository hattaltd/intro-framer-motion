// START: import-packages
import { Container } from '../index';
import styled from 'styled-components';
import Image from 'next/image';

// START: section-product
const Product = () => {
    return (
        <SProduct>
            <Container>
                <Grid>
                    <ColOne>col1</ColOne>
                    <ColTwo>
                        <Image
                            alt="Cup image"
                            src="/imgs/cup.png"
                            width={256}
                            height={315}
                        />
                    </ColTwo>
                </Grid>
            </Container>
        </SProduct>
    )
}
export default Product;

// START: styling
const SProduct = styled.section`
  min-height: 100vh;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
    justify-items: center;

    /* border: solid 1px black; */
`;

const ColOne = styled.div`
    /* border: solid 1px black; */
`;

const ColTwo = styled.div`
    width: 80%;
    /* border: solid 1px black; */
`;