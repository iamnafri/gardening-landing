"use client";

import { Container, HStack, Stack, VStack } from "@/panda/jsx";
import React from "react";
import { Avatar, Box, Button, Heading, Text } from "../elements";

export const Hero = () => {
  return (
    <Container>
      <Stack
        direction={{ base: "column", lg: "row" }}
        h={{ base: "3xl", lg: "3xl" }}
        alignItems={"start"}
        gap={{ base: "4", lg: "0" }}
        pt={"6"}
      >
        <Box
          height={"full"}
          width={{ base: "full", lg: "2xl" }}
          bgImage={"url(/images/hero.png)"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          bgPosition={"center"}
          borderRadius={"2xl"}
        />
        <VStack
          height={"full"}
          flex={"1"}
          gap={{ base: "6", lg: "10" }}
          justify={"center"}
          alignItems={"start"}
          pl={{ base: "0", lg: "10" }}
          pr={{ base: "0", lg: "20" }}
        >
          <Heading
            as="h1"
            textStyle={{ base: "5xl", lg: "7xl" }}
            fontWeight={"bold"}
            textAlign={{ base: "center", lg: "left" }}
          >
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
          <Text textAlign={{ base: "center", lg: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit suscipit
            egestas consectetur adipiscing elit.
          </Text>

          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "2", lg: "8" }}
            width={{ base: "full", lg: "auto" }}
            justify={"center"}
          >
            <Button size={{ base: "md", lg: "2xl" }}>Get Started</Button>
            <Button variant={"secondary"} size={{ base: "md", lg: "2xl" }}>
              Learn More
            </Button>
          </Stack>

          <HStack width={{ base: "full", lg: "auto" }} justify={"center"}>
            <HStack gap={"0"}>
              {[11, 22, 33, 44, 55].map((i) => (
                <Avatar
                  key={i}
                  size={{ base: "xl", lg: "2xl" }}
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
            <VStack alignItems={"start"} gap={"0"}>
              <Heading fontSize={{ base: "2xl", lg: "4xl" }}>50K+</Heading>
              <Text>Joined in already</Text>
            </VStack>
          </HStack>
        </VStack>
      </Stack>
    </Container>
  );
};
