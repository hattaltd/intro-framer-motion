// START: import-packages
import { Container } from '../index';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.45,
            delayChildren: 0.55,
        }
    }
}

const fadeInDown = {
    initial: {
        y: -15,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            ease: 'linear',
            duration: 0.65
        },
    }
}

// START: section-product
const Product = () => {
    return (
        <SProduct
        >
            <Container>
                <Grid
                    as={motion.div}
                    // variants={staggerContainer} 
                    initial="initial"
                    whileInView={{
                        transition: {
                            staggerChildren: 0.45,
                            delayChildren: 0.55,
                        }
                    }}
                    viewport={{
                        once:true, 
                        amount: 0.6
                    }}
                >
                    <ColOne
                        as={motion.div}
                        variants={fadeInDown}
                    >col1
                    </ColOne>
                    <ColTwo
                        
                    >
                        <motion.span
                            variants={fadeInDown}
                        >
                            <Image
                                alt="Cup image"
                                src="/imgs/cup.png"
                                fill
                            />
                        </motion.span>
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

    span {
        position: relative;
        width: 240px;
        height: 280px;
        overflow: hidden;
        display: block;
    }

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        /* margin-left: 7%; */
        /* border: solid 1px gold; */
    }
    
`;