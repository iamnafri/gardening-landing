import React from "react";
import { Box, Heading, Text } from "../elements";
import { Center, Grid, HStack, VStack } from "@/panda/jsx";

const questions = [
  {
    title: "What factors influence the cost of a landscaping project?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
  {
    title: "What sets your landscaping service apart from others in the area?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
  {
    title: "How often should I schedule landscape maintenance services?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
  {
    title: "Do you provide sustainable and eco friendly landscaping options?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
  {
    title: "What landscaping services do you offer?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
  {
    title: "Can you assist with obtaining permits for landscaping projects?",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor.",
  },
];

export const Faq = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={{ base: "3xl", lg: "5xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Frequently Asked{" "}
          <Box
            as="mark"
            bg={"transparent"}
            color={"green.500"}
            fontWeight={"inherit"}
            fontSize={"inherit"}
          >
            Questions
          </Box>
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit.
        </Text>
      </VStack>

      <Grid columns={{ base: 1, lg: 2 }} gap={{ base: "6", lg: "12" }}>
        {questions.map((question) => (
          <HStack
            key={question.title}
            p={"8"}
            boxShadow={"xl"}
            borderRadius={"2xl"}
            alignItems={"start"}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.33374C10.8 3.33374 3.33337 10.8004 3.33337 20.0004C3.33337 29.2004 10.8 36.6671 20 36.6671C29.2 36.6671 36.6667 29.2004 36.6667 20.0004C36.6667 10.8004 29.2 3.33374 20 3.33374ZM20 33.3337C12.65 33.3337 6.66671 27.3504 6.66671 20.0004C6.66671 12.6504 12.65 6.66707 20 6.66707C27.35 6.66707 33.3334 12.6504 33.3334 20.0004C33.3334 27.3504 27.35 33.3337 20 33.3337ZM18.3334 26.6671H21.6667V30.0004H18.3334V26.6671ZM21.0167 10.0671C17.5834 9.56707 14.55 11.6837 13.6334 14.7171C13.3334 15.6837 14.0667 16.6671 15.0834 16.6671H15.4167C16.1 16.6671 16.65 16.1837 16.8834 15.5504C17.4167 14.0671 19 13.0504 20.7167 13.4171C22.3 13.7504 23.4667 15.3004 23.3334 16.9171C23.1667 19.1504 20.6334 19.6337 19.25 21.7171C19.25 21.7337 19.2334 21.7337 19.2334 21.7504C19.2167 21.7837 19.2 21.8004 19.1834 21.8337C19.0334 22.0837 18.8834 22.3671 18.7667 22.6671C18.75 22.7171 18.7167 22.7504 18.7 22.8004C18.6834 22.8337 18.6834 22.8671 18.6667 22.9171C18.4667 23.4837 18.3334 24.1671 18.3334 25.0004H21.6667C21.6667 24.3004 21.85 23.7171 22.1334 23.2171C22.1667 23.1671 22.1834 23.1171 22.2167 23.0671C22.35 22.8337 22.5167 22.6171 22.6834 22.4171C22.7 22.4004 22.7167 22.3671 22.7334 22.3504C22.9 22.1504 23.0834 21.9671 23.2834 21.7837C24.8834 20.2671 27.05 19.0337 26.6 15.8504C26.2 12.9504 23.9167 10.5004 21.0167 10.0671Z"
                fill="#2FB95D"
              />
            </svg>
            <VStack flex={"1"} alignItems={"start"}>
              <Heading as="h5" textStyle={"2xl"}>
                {question.title}
              </Heading>
              <Text>{question.desc}</Text>
            </VStack>
          </HStack>
        ))}
      </Grid>
    </Center>
  );
};
