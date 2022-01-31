import React, { useEffect } from "react";
import { Flex, Container, Text, Heading, Image } from "@chakra-ui/react";
import ARROW from "../assets/images/new-arrow.png";
import { infoData } from "./data";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export default function InfoSteps() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation9 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView3) {
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView4) {
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView5) {
      animation5.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView6) {
      animation6.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView7) {
      animation7.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView8) {
      animation8.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (inView9) {
      animation9.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    if (!inView2) {
      animation2.start({ x: "-100vw" });
    }
    if (!inView3) {
      animation3.start({ x: "-100vw" });
    }
    if (!inView4) {
      animation4.start({ x: "-100vw" });
    }
    if (!inView5) {
      animation5.start({ x: "-100vw" });
    }
    if (!inView6) {
      animation6.start({ x: "-100vw" });
    }
    if (!inView7) {
      animation7.start({ x: "-100vw" });
    }
    if (!inView8) {
      animation8.start({ x: "-100vw" });
    }
    if (!inView9) {
      animation9.start({ x: "-100vw" });
    }
    

    console.log(inView);
  });

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <div ref={ref}>
          <motion.div animate={animation}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[0].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[0].description}
              </Text>
            </Container>
            {infoData[0].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref2}>
          <motion.div animate={animation2}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[1].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[1].description}
              </Text>
            </Container>
            {infoData[1].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref3}>
          <motion.div animate={animation3}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[2].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[2].description}
              </Text>
            </Container>
            {infoData[2].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref4}>
          <motion.div animate={animation4}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[3].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[3].description}
              </Text>
            </Container>
            {infoData[3].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref5}>
          <motion.div animate={animation5}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[4].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[4].description}
              </Text>
            </Container>
            {infoData[4].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref6}>
          <motion.div animate={animation6}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[5].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[5].description}
              </Text>
            </Container>
            {infoData[5].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref7}>
          <motion.div animate={animation7}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[6].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[6].description}
              </Text>
            </Container>
            {infoData[6].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref8}>
          <motion.div animate={animation8}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[7].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[7].description}
              </Text>
            </Container>
            {infoData[7].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
        <div ref={ref9}>
          <motion.div animate={animation9}>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{infoData[8].title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {infoData[8].description}
              </Text>
            </Container>
            {infoData[8].index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </motion.div>
        </div>
      </Flex>
    </Flex>
  );
}
