import React from "react";
import { Box, Button } from "../elements";
import { Container, HStack } from "@/panda/jsx";
import { EverGreen } from "../icons";

export const Header = () => {
  return (
    <Box as={"header"} bg={"green.950"}>
      <Container display={"flex"} alignItems={"center"} py={"8"}>
        <EverGreen />
        <HStack flex={"1"} justify={"center"} gap={"14"}>
          <Button variant={"link"}>Home</Button>
          <Button variant={"link"}>About Us</Button>
          <Button variant={"link"}>Our Service</Button>
          <Button variant={"link"}>Blog</Button>
        </HStack>
        <Button>Login</Button>
      </Container>
    </Box>
  );
};
