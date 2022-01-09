import React from "react";
import {
  Flex,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      flexGrow={2}
      padding={3}
      backgroundColor={"black"}
      m={15}
      borderRadius={10}
    >
      <Text color={"white"}>How a Bill Becomes a Law</Text>

      <HStack mr={5}>
        <Menu>
          <MenuButton
            as={Button}
            color={"white"}
            bg={"black"}
            _hover={{ bg: "white", color: "black" }}
            _active={{ bg: "white", color: "black" }}
            _focus={{ border: "none" }}
            mr={7}
          >
            Activities
          </MenuButton>
          <MenuList>
            <MenuItem>Games</MenuItem>
            <MenuItem>Quizzes</MenuItem>
          </MenuList>
        </Menu>
        <Link color={"white"}>More Information</Link>
      </HStack>
    </Flex>
  );
}
