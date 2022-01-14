import React from "react";
import { Heading, Image, Flex, Text, Box } from "@chakra-ui/react";
import BILL from "../assets/images/bill.jpg";
import "../App.css";
import { motion } from "framer-motion";

export default function Banner() {
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionImage = motion(Image);

  return (
    <Flex
      justifyContent={"start"}
      alignItems={"center"}
      flexDirection={"column"}
      h={"100vh"}
      maxW={"1336px"}
      mb={100}
    >
      <Flex
        justifyContent={"space-between"}
        w={"100%"}
        h={"100vh"}
        alignItems={"start"}
        p={50}
      >
        <Box mb={50} mt={10} pr={"200px"}>
          <MotionHeading
            fontSize={65}
            textAlign={"start"}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            How Does a <span style={{ color: "red" }}>Bill</span>
          </MotionHeading>
          <MotionHeading
            fontSize={65}
            textAlign={"start"}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.2 }}
          >
            Become a <span style={{ color: "blue" }}>Law</span>?
          </MotionHeading>
          <MotionText
            textAlign={"start"}
            mt={50}
            mb={50}
            fontSize={25}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.4 }}
          >
            For a <span style={{ color: "red" }}>bill</span> to become a{" "}
            <span style={{ color: "blue" }}>law</span> it has to go through a
            several amount of steps. Here you will learn these various steps,
            and what really happens to turn a{" "}
            <span style={{ color: "red" }}>bill</span> to a{" "}
            <span style={{ color: "blue" }}>law</span>.
          </MotionText>
          {/* <Image src={ARROW} boxSize="200px" /> */}
        </Box>
        <MotionImage
          className="image-1"
          src={BILL}
          alt="Bill Image"
          h={"60%"}
          alignSelf={"center"}
          mr={"70px"}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", delay: 0.6 }}
        />
      </Flex>
    </Flex>
  );
}
