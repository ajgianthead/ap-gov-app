import React from "react";
import { Heading, Image, Flex, VStack, Spacer } from "@chakra-ui/react";
import ARROW from "../assets/images/new-arrow.png";

export default function Banner() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <VStack mt={100}>
        <Heading mb={100} size="4xl" textAlign={"center"}>
          How Does a Bill
          <br />
          Become a Law?
        </Heading>

        <Image src={ARROW} alt="Down Arrow" boxSize={"150px"} />
      </VStack>
    </Flex>
  );
}
