// START: import-packages
import { Container } from '../index';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// START: section-hero
const Hero = () => {
    return (
        <SHero>
            <LayerImg>
                <Image 
                    alt="Hero image"
                    src="https://res.cloudinary.com/dltslq5fh/image/upload/v1678633033/bg-hero/bdjuswpiskrprxnz4syh.jpg"
                    width={1920}
                    height={1080}
                />
            </LayerImg>
            <LayerOverlay />
            <LayerContent>
                <ColOne
                >
                    <motion.h1
                        whileHover={{ scale: 1.2 }}
                    >Welcome To Our Cafe
                    </motion.h1>
                </ColOne>
                <ColTwo>col2</ColTwo>
            </LayerContent>
        </SHero>
    )
}
export default Hero;

// START: styling
const SHero = styled.section`
    height: 100vh;
    background-color: #2b2727;
    color: #d1f5a8;
    position: relative;
    z-index: 4;
`;

const LayerImg = styled.div`
    position: absolute;
    z-index: 2;
    inset: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const LayerOverlay = styled.div`
    position: absolute;
    z-index: 3;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;

const LayerContent = styled.div`
    position: absolute;
    z-index: 4;
    inset: 0;

    max-width: 1760px;
    margin: 0 auto;

    padding: 5rem 0 0 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 90% 10%;
`;

const ColOne = styled.div`
    align-self: center;
    justify-self: center;
    padding-bottom: 10rem;

    h1 {
        font-size: 78px;
        font-weight: 700;
    }
`;

const ColTwo = styled.div`

`;