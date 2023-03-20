// START: import-packages
import { Container } from '../index';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.85,
            staggerChildren: 0.45
        }
    }
};
  
const item = {
    hidden: { y: -40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

// START: section-location
const Benefits = () => {
    return (
        <SBenefits>
            <Container
                maxWidth='1800px'
            >
                <Grid>
                    <ColOne>
                        <ImgWrap
                        >
                            <Image 
                                alt="A large cup of coffee"
                                src="/imgs/img-lg-cup.png"
                                width={224.13}
                                height={400}
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
                        <h1>Benefits Of Drinking Coffee</h1>
                        <CardList
                            as={motion.div}
                            variants={container}
                            initial="hidden"
                            // animate="visible"
                            whileInView="visible"
                            viewport={{
                                once:true, 
                                amount: 0.6
                            }}
                        >
                            {   [1,2,3,4].map((i, index) =>
                                <Card
                                    key={index}
                                    as={motion.div}
                                    variants={item}
                                >
                                    <h3>0{i}</h3>
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
    padding: 9rem 0;
    /* border: solid 1px black; */
    background-color: #D4B48B;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgWrap = styled.span`
    /* border: solid 1px black; */
    position: relative;
    width: 224.13px;
    height: 400px;
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
        font-size: 42px;
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

    h1 {
        font-size: 42px;
        font-weight: 600;
    }
`;

const CardList = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 50px 30px;
`;

const Card = styled.div`
    p {
        margin-top: 10px;
    }
`;