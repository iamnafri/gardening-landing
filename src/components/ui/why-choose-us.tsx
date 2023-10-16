import React from "react";
import { Box, Heading, Text } from "../elements";
import { Center, HStack, VStack } from "@/panda/jsx";
import { CheckIcon } from "lucide-react";

const reasons = [
  {
    title: "Sustainable Practices",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur.",
  },
  {
    title: "Licensed and Insured",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur.",
  },
  {
    title: "Local Knowledge",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur",
  },
];

export const WhyChooseUs = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <HStack alignItems={"start"} gap={"10"}>
        <VStack flex={"1"} gap={"16"}>
          <VStack gap={"6"} alignItems={"start"}>
            <Heading as="h2" textStyle={"5xl"} fontWeight={"bold"}>
              Why Choose{" "}
              <Box
                as="mark"
                bg={"transparent"}
                color={"green.500"}
                fontWeight={"inherit"}
                fontSize={"inherit"}
              >
                Us?
              </Box>
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus
              scelerisque orci nec erat cursus, sed facilisis velit porttitor.
              Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac
              metus. Vivamus accumsan diam eget auctor.
            </Text>
          </VStack>
          <VStack gap={"10"}>
            {reasons.map((reason) => (
              <HStack key={reason.title} gap={"8"}>
                <Box
                  color={"white"}
                  bg={"green.500"}
                  borderRadius={"xl"}
                  p={"4"}
                >
                  <CheckIcon size={32} />
                </Box>
                <VStack flex={"1"} alignItems={"start"}>
                  <Heading as="h5" textStyle={"2xl"}>
                    {reason.title}
                  </Heading>
                  <Text>{reason.desc}</Text>
                  <Text
                    as={"span"}
                    color={"green.500"}
                    textDecoration={"underline"}
                    textDecorationColor={"green.500"}
                  >
                    Read more...
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
        <Box
          width={"xl"}
          height={"4xl"}
          borderRadius={"2xl"}
          bgImage={"url(/images/why-choose-us.png)"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        />
      </HStack>
    </Center>
  );
};
