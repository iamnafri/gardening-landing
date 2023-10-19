import React from "react";
import { Box, Button } from "../elements";
import { Container, HStack } from "@/panda/jsx";
import { EverGreen } from "../icons";
import { AlignRightIcon } from "lucide-react";

export const Header = () => {
  return (
    <Box as={"header"} bg={"green.950"}>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={{ base: "6", lg: "8" }}
      >
        <Box w={{ base: "32", lg: "36" }}>
          <EverGreen />
        </Box>
        <HStack display={{ base: "none", lg: "flex" }} flex={"1"} gap={"0"}>
          <HStack flex={"1"} justify={"center"} gap={"14"}>
            <Button variant={"link"}>Home</Button>
            <Button variant={"link"}>About Us</Button>
            <Button variant={"link"}>Our Service</Button>
            <Button variant={"link"}>Blog</Button>
          </HStack>
          <Button>Login</Button>
        </HStack>
        <Button
          display={{ base: "initial", lg: "none" }}
          variant={"link"}
          color={"white"}
        >
          <AlignRightIcon size={42} />
        </Button>
      </Container>
    </Box>
  );
};
