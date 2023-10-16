"use client";

import React from "react";
import { Avatar, Box, Heading, Rating, RatingGroup, Text } from "../elements";
import { Center, Grid, HStack, VStack } from "@/panda/jsx";
import { Star } from "../icons";

const testimonies = [
  {
    image: 30,
    name: "Charlie Leuschke",
    rating: 5,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
  {
    image: 31,
    name: "Luke Glover",
    rating: 5,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
  {
    image: 32,
    name: "Roderick Schumm",
    rating: 5,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
  {
    image: 33,
    name: "Brandi Boyle",
    rating: 5,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
  {
    image: 34,
    name: "Scott Runolfsdottir",
    rating: 5,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
  {
    image: 35,
    name: "Claire Witting",
    rating: 0,
    text: "Phasellus fermentum orci non nunc fermentum mattis. In eleifend vehicula justo, sed pulvinar erat scelerisque vel. Vestibulum eu erat elit. Etiam mattis feugiat finibus.",
  },
];

export const Testimoni = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={"5xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Listen to what ourh{" "}
          <Box
            as="mark"
            bg={"transparent"}
            color={"green.500"}
            fontWeight={"inherit"}
            fontSize={"inherit"}
          >
            customers say
          </Box>
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit.
        </Text>
      </VStack>

      <Grid columns={3} gap={"12"}>
        {testimonies.map((testimoni) => (
          <VStack
            key={testimoni.name}
            p={"8"}
            boxShadow={"xl"}
            borderRadius={"2xl"}
            gap={"10"}
          >
            <HStack width={"full"} gap={"4"}>
              <Avatar size={"lg"}>
                <Avatar.Fallback>PA</Avatar.Fallback>
                <Avatar.Image
                  src={`https://i.pravatar.cc/300?img=${testimoni.image}`}
                  alt="avatar"
                />
              </Avatar>
              <VStack flex={"1"} alignItems={"start"} gap={"0"}>
                <Heading as="h6" textStyle={"lg"}>
                  {testimoni.name}
                </Heading>
                <RatingGroup defaultValue={testimoni.rating} readOnly>
                  <RatingGroup.Control>
                    {({ sizeArray }) =>
                      sizeArray.map((index) => (
                        <Rating
                          key={index}
                          index={index}
                          color={"yellow.500"}
                          fill={"yellow.500"}
                        >
                          {({ isHalf }) => <Star isHalf={isHalf} />}
                        </Rating>
                      ))
                    }
                  </RatingGroup.Control>
                </RatingGroup>
              </VStack>
            </HStack>

            <Text>{testimoni.text}</Text>
          </VStack>
        ))}
      </Grid>
    </Center>
  );
};
