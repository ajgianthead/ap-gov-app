import React from "react";
import {
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { RiBillLine } from "react-icons/ri";

export default function Navbar() {
  // Creating animation components
  const MotionLink = motion(Link);
  const MotionMenuButton = motion(MenuButton);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={3}
      backgroundColor={"white"}
      maxW={"1336px"}
    >
      <HStack>
        <RiBillLine fontSize={40} />
        <Heading color={"black"}>
          <i>
            <span style={{ color: "red" }}>Bill</span>
            <span style={{ color: "black" }}>
              {/* WebkitTextStroke: "2px black" */}
              To
            </span>
            <span style={{ color: "blue" }}>Law</span>
          </i>
        </Heading>
      </HStack>

      <HStack mr={5}>
        <Menu>
          <MotionMenuButton
            whileHover={{ scale: 1.1 }}
            as={Button}
            color={"black"}
            bg={"white"}
            _hover={{ bg: "white", color: "black" }}
            _active={{ bg: "white", color: "black" }}
            _focus={{ border: "none" }}
            isDisabled={true}
            mr={7}
          >
            Activities
          </MotionMenuButton>
          <MenuList>
            <MenuItem>Build Your Own Build</MenuItem>
            <MenuItem>Quizzes</MenuItem>
          </MenuList>
        </Menu>

        <MotionLink
          color={"black"}
          whileHover={{ scale: 1.1 }}
          style={{ textDecoration: "none" }}
          isDisabled={true}
        >
          More Information
        </MotionLink>
      </HStack>
    </Flex>
  );
}
