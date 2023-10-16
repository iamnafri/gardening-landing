"use client";

import { Container, HStack, VStack } from "@/panda/jsx";
import React from "react";
import { Avatar, Box, Button, Heading, Text } from "../elements";

export const Hero = () => {
  return (
    <Container>
      <HStack h={"3xl"} alignItems={"start"} gap={"0"} pt={"6"}>
        <Box
          height={"full"}
          width={"2xl"}
          bgImage={"url(/images/hero.png)"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          borderRadius={"2xl"}
        />
        <VStack
          height={"full"}
          flex={"1"}
          gap={"10"}
          justify={"center"}
          alignItems={"start"}
          pl={"10"}
          pr={"20"}
        >
          <Heading as="h1" textStyle={"7xl"} fontWeight={"bold"}>
            Crafting{" "}
            <Box
              as="mark"
              bg={"transparent"}
              color={"green.500"}
              fontWeight={"inherit"}
              fontSize={"inherit"}
            >
              Green
            </Box>{" "}
            Masterpieces
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit suscipit
            egestas consectetur adipiscing elit.
          </Text>

          <HStack gap={"8"}>
            <Button size={"2xl"}>Get Started</Button>
            <Button variant={"secondary"} size={"2xl"}>
              Learn More
            </Button>
          </HStack>

          <HStack>
            <HStack gap={"0"}>
              {[11, 22, 33, 44, 55].map((i) => (
                <Avatar
                  key={i}
                  size={"2xl"}
                  borderWidth="2px"
                  borderColor={"white"}
                  _notFirst={{ marginLeft: "-6" }}
                >
                  <Avatar.Fallback>PA</Avatar.Fallback>
                  <Avatar.Image
                    src={`https://i.pravatar.cc/300?img=${i}`}
                    alt="avatar"
                  />
                </Avatar>
              ))}
            </HStack>
            <VStack alignItems={"start"} gap={"1"}>
              <Heading fontSize={"4xl"}>50K+</Heading>
              <Text>Joined in already</Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
};
