// START: import-packages
import { Container } from '../index';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

// START: variants
const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.85,
            staggerChildren: 0.25,
        }
    }
};
  
const item: Variants = {
    hidden: { 
        y: -40, 
        opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.65,
            duration: 0.8
        }
    }
};

// START: section-benefits
const Benefits = () => {
    return (
        <SBenefits>
            <Container
                maxWidth='1800px'
            >
                <Grid>
                    <ColOne>
                        <ImgWrap
                            as={motion.span}
                            initial={{
                                rotateZ: 4
                            }}
                            animate={{
                                translateY: [0,-15,0],
                                // rotateZ: [0,-15,0,15,0]
                            }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                        >
                            <Image 
                                alt="A large cup of coffee"
                                src="/imgs/img-lg-cup.png"
                                width={168.1}
                                height={300}
                                quality={100}
                                priority
                            />
                        </ImgWrap>
                        <Content>
                            <h1>
                                Cappucino
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quis voluptatibus sit itaque fugit numquam.
                            </p>
                        </Content>
                    </ColOne>
                    <ColTwo>
                        <h1><span>Benefits</span> Of Coffee </h1>
                        <CardList
                            as={motion.div}
                            variants={container}
                            initial="hidden"
                            // animate="visible"
                            whileInView="visible"
                            viewport={{
                                once: false, 
                                amount: 0.6
                            }}
                        >
                            {   [1,2,3,4].map((i, index) =>
                                <Card
                                    key={index}
                                    as={motion.div}
                                    variants={item}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        width="24" 
                                        height="24"
                                        // variants={svgVar}
                                        // initial="hidden"
                                        // animate="visible"
                                    >
                                        <path 
                                            fill="none" 
                                            d="M0 0H24V24H0z"
                                        />
                                        <path
                                            fill="#B85C38" d="M6 3c3.49 0 6.383 2.554 6.913 5.895C14.088 7.724 15.71 7 17.5 7H22v2.5c0 3.59-2.91 6.5-6.5 6.5H13v5h-2v-8H9c-3.866 0-7-3.134-7-7V3h4zm14 6h-2.5c-2.485 0-4.5 2.015-4.5 4.5v.5h2.5c2.485 0 4.5-2.015 4.5-4.5V9zM6 5H4v1c0 2.761 2.239 5 5 5h2v-1c0-2.761-2.239-5-5-5z"
                                        />
                                    </svg>
                                    <h3>Good for your health</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Card>
                            )}
                        </CardList>
                    </ColTwo>
                </Grid>
            </Container>
        </SBenefits>
    )
}
export default Benefits;

// START: styling
const SBenefits = styled.section`
    background-color: #DBBB92;
    padding: 2rem 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 40px;

    /* border: solid 1px black; */
    align-items: center;
`;

const ColOne = styled.div`
    padding: 7rem 0;
    /* border: solid 1px black; */
    /* background-color: #D4B48B; */
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgWrap = styled.span`
    /* border: solid 1px black; */
    position: relative;
    width: 168.1px;
    height: 300px;
    display: block;

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const Content = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 38px;
        font-weight: 600;
        color: #B85C38;
    }

    p {
        width: 50%;
        color: #2D2424;
    }
`;

const ColTwo = styled.div`
    /* border: solid 1px black; */

    color: #2D2424;

    h1 {
        font-size: 42px;
        font-weight: 500;
    }

    span {
        color: #B85C38;
        font-weight: 600;
    }
`;

const CardList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
`;

const Card = styled.div`
    padding: 20px;
    background-color: #D4B48B;
    border-radius: 10px;

    h3 {
        font-weight: 500;
        font-size: 18px;
    }
    
    p {
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
    }
`;