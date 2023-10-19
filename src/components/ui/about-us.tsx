import React from "react";
import { Box, Heading, Text } from "../elements";
import { Center, Flex, Stack, VStack } from "@/panda/jsx";

const stats = [
  {
    count: "13",
    desc: "Years Experience",
  },
  {
    count: "13K",
    desc: "Product",
  },
  {
    count: "7k",
    desc: "Satisfied Clients",
  },
  {
    count: "124",
    desc: "Local Team Members",
  },
];

export const AboutUs = () => {
  return (
    <Center flexDir={"column"} gap={{ base: "10", lg: "16" }} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={{ base: "3xl", lg: "5xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Landscape Design Crafting{" "}
          <Box
            as="mark"
            bg={"transparent"}
            color={"green.500"}
            fontWeight={"inherit"}
            fontSize={"inherit"}
          >
            Beyond Expectations
          </Box>
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit.
        </Text>
      </VStack>

      <Flex
        width={"full"}
        height={{ base: "md", lg: "xl" }}
        borderRadius={"3xl"}
        bgImage={"url(/images/about-us.png)"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"0px -220px"}
        flexDir={"column"}
        justify={"end"}
        overflow={"hidden"}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          px={{ base: "6", lg: "24" }}
          py={{ base: "6", lg: "12" }}
          bg={"green.950"}
          justify={"space-around"}
        >
          {stats.map((stat, index) => (
            <VStack key={index} alignItems={"center"} gap={"1"} color={"white"}>
              <Heading fontSize={{ base: "2xl", lg: "4xl" }} color={"white"}>
                {stat.count}
                <Box
                  as="mark"
                  bg={"transparent"}
                  color={"green.500"}
                  fontWeight={"inherit"}
                  fontSize={"inherit"}
                >
                  +
                </Box>
              </Heading>
              <Text>{stat.desc}</Text>
            </VStack>
          ))}
        </Stack>
      </Flex>
    </Center>
  );
};
