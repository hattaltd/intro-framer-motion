// START: import-packages
import { Container } from '../index';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';


// START: section-product
const Product = () => {
    return (
        <SProduct
        >
            <Container>
                <Grid
                    as={motion.section}
                    initial={{}}
                    whileInView="animate"
                    viewport={{
                        once: true, 
                        amount: 0.9
                    }}
                    animate={{
                        transition: {
                            staggerChildren: 0.95,
                            delayChildren: 0.45,
                        }
                    }}
                >
                    <ColOne>col1</ColOne>
                    <ColTwo
                        as={motion.div}
                        initial={{
                            y: -500,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { 
                                type: 'tween', 
                                ease: 'linear',
                                duration: 0.65
                            },
                        }}
                    >
                        <Image
                            alt="Cup image"
                            src="/imgs/cup.png"
                            width={226}
                            height={285}
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
  background-color: #FAEDE5;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
    justify-items: center;

    /* border: solid 1px black; */
`;

const ColOne = styled.div`
    /* border: solid 1px black; */
`;

const ColTwo = styled.div`
    padding: 8rem 7rem;

    /* border: solid 1px black; */
    border-radius: 0 0 190px 190px;

    background-color: #393532;

    img {
        margin-left: 7%;
        /* border: solid 1px gold; */
    }
`;