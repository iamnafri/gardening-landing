import React from "react";
import { Box, Heading, Text } from "../elements";
import { Center, Grid, VStack } from "@/panda/jsx";
import Image from "next/image";
import { css } from "@/panda/css";

const articles = [
  {
    title: "Creating a Pollinator Friendly Garden",
    date: "10 October 2024",
    image: "/images/article-1.png",
    text: "Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    title: "Tips for Cost-Effective Projects",
    date: "18 October 2024",
    image: "/images/article-2.png",
    text: "Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    title: "Landscaping for Increased Home Value",
    date: "29 October 2024",
    image: "/images/article-3.png",
    text: "Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
];

export const Article = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={"5xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Box
            as="mark"
            bg={"transparent"}
            color={"green.500"}
            fontWeight={"inherit"}
            fontSize={"inherit"}
          >
            New Articles
          </Box>{" "}
          and Knowledge
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit.
        </Text>
      </VStack>

      <Grid columns={3} gap={"12"} width={"inherit"}>
        {articles.map((article) => (
          <Box
            as={"a"}
            href="#"
            key={article.title}
            position={"relative"}
            borderRadius={"2xl"}
            boxShadow={"xl"}
            overflow={"hidden"}
            className={"group"}
          >
            <Box
              position={"relative"}
              bg="neutral.200"
              height={"72"}
              width={"inherit"}
              overflow={"hidden"}
            >
              <Image
                src={article.image}
                alt={"gallery.title"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={css({
                  transition: "transform",
                  transitionDuration: "slowest",
                  _groupHover: {
                    transform: "scale(1.1)",
                  },
                })}
              />
            </Box>
            <VStack flex={"1"} alignItems={"start"} p={"6"}>
              <Text as={"span"} color={"green.500"} fontSize={"sm"}>
                {article.date}
              </Text>
              <Heading as="h5" textStyle={"2xl"}>
                {article.title}
              </Heading>
              <Text>{article.text}</Text>
              <Text
                as={"span"}
                color={"green.500"}
                textDecoration={"underline"}
                textDecorationColor={"green.500"}
              >
                Read more...
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Center>
  );
};
