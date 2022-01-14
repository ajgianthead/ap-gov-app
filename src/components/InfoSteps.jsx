import React from "react";
import { Flex, Container, Text, Heading, Image } from "@chakra-ui/react";
import ARROW from "../assets/images/new-arrow.png";
import { infoData } from "./data";
export default function InfoSteps() {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {infoData.map((element, index) => {
        return (
          <>
            <Container border={"2px black solid"} p={10} borderRadius={20}>
              <Heading mb={8}>
                <u>{element.title}</u>
              </Heading>
              <Text fontSize={25} style={{ lineHeight: "1.8" }}>
                {element.description}
              </Text>
            </Container>
            {index !== infoData.length - 1 ? (
              <Image src={ARROW} alt="Arrow" boxSize="30vw" mt={50} />
            ) : (
              <></>
            )}
          </>
        );
      })}
    </Flex>
  );
}
