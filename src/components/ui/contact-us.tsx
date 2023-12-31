import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Label,
  Text,
  Textarea,
} from "../elements";
import { Center, Stack, VStack } from "@/panda/jsx";

export const ContactUs = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems={"start"}
        gap={"12"}
      >
        <VStack flex={"1"} gap={"16"}>
          <VStack
            gap={"6"}
            alignItems={"start"}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Heading
              as="h2"
              textStyle={{ base: "3xl", lg: "5xl" }}
              fontWeight={"bold"}
            >
              Fill the Form to{" "}
              <Box
                as="mark"
                bg={"transparent"}
                color={"green.500"}
                fontWeight={"inherit"}
                fontSize={"inherit"}
              >
                Fill the Form to?
              </Box>
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.
            </Text>
          </VStack>
        </VStack>
        <VStack
          flex={"1"}
          p={"8"}
          boxShadow={"xl"}
          borderRadius={"2xl"}
          gap={"6"}
          w={"full"}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            width={"full"}
            gap={"6"}
          >
            <Stack flex={"1"}>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" size={"xl"} />
            </Stack>
            <Stack flex={"1"}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" size={"xl"} />
            </Stack>
          </Stack>
          <Stack
            direction={{ base: "column", lg: "row" }}
            width={"full"}
            gap={"6"}
          >
            <Stack flex={"1"}>
              <Label htmlFor="telephone">Telephone</Label>
              <Input id="telephone" size={"xl"} />
            </Stack>
            <Stack flex={"1"}>
              <Label htmlFor="service">Service</Label>
              <Input id="service" size={"xl"} />
            </Stack>
          </Stack>
          <Stack width="full">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} />
          </Stack>
          <Button size={"xl"} width={"full"}>
            Get Started
          </Button>
        </VStack>
      </Stack>
    </Center>
  );
};
