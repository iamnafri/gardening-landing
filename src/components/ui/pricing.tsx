import React from "react";
import { Box, Button, Heading, Text } from "../elements";
import { Center, Divider, Flex, Stack, VStack } from "@/panda/jsx";

const listIcon =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDI1QzE5LjYgMjUgMjUgMTkuNiAyNSAxM0MyNSA2LjQgMTkuNiAxIDEzIDFDNi40IDEgMSA2LjQgMSAxM0MxIDE5LjYgNi40IDI1IDEzIDI1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy44OTk4MSAxM0wxMS4yOTU4IDE2LjM5NkwxOC4wOTk4IDkuNjA0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";

export const Pricing = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={{ base: "3xl", lg: "5xl" }}
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
            Princing
          </Box>{" "}
          Table
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut volutpat
          tincidunt eget at felisioj,
        </Text>
      </VStack>

      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={"12"}
        width={"full"}
        justify={"center"}
      >
        {[1, 2].map((plan, index) => (
          <Flex key={index} flexDir={"column"} alignItems={"center"}>
            <Box
              bg={"green.950"}
              w={"60"}
              px={"10"}
              py={"2"}
              textAlign={"center"}
              borderTopRadius={"2xl"}
            >
              <Heading as="h6" color={"white"} textStyle={"lg"}>
                Package {index + 1}
              </Heading>
            </Box>
            <Box
              bg={"green.500"}
              w={{ base: "full", lg: "md" }}
              borderRadius={"2xl"}
            >
              <VStack alignItems={"start"} p={"8"}>
                <Heading as="h5" textStyle={"2xl"} color={"white"}>
                  Standard Plan
                </Heading>
                <Heading
                  as="h2"
                  textStyle={"5xl"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  $20.00
                </Heading>
                <Text as={"span"} color={"white"}>
                  /Per month
                </Text>
              </VStack>
              <Divider color={"white"} width={"full"} />
              <VStack alignItems={"start"} p={"8"} gap={"8"}>
                <Box
                  as={"ul"}
                  width={"full"}
                  color={"white"}
                  display={"flex"}
                  flexDir={"column"}
                >
                  <Box
                    as={"li"}
                    py={"4"}
                    pr={"2"}
                    pl={"10"}
                    background={`url(${listIcon}) no-repeat left top`}
                    backgroundPositionY={"center"}
                    borderBottom={"solid 1px var(--colors-white)"}
                  >
                    Initial Consultation
                  </Box>
                  <Box
                    as={"li"}
                    py={"4"}
                    pr={"2"}
                    pl={"10"}
                    background={`url(${listIcon}) no-repeat left top`}
                    backgroundPositionY={"center"}
                    borderBottom={"solid 1px var(--colors-white)"}
                  >
                    Labor Costs
                  </Box>
                  <Box
                    as={"li"}
                    py={"4"}
                    pr={"2"}
                    pl={"10"}
                    background={`url(${listIcon}) no-repeat left top`}
                    backgroundPositionY={"center"}
                    borderBottom={"solid 1px var(--colors-white)"}
                  >
                    Materials and Plants
                  </Box>
                  <Box
                    as={"li"}
                    py={"4"}
                    pr={"2"}
                    pl={"10"}
                    background={`url(${listIcon}) no-repeat left top`}
                    backgroundPositionY={"center"}
                    borderBottom={"solid 1px var(--colors-white)"}
                  >
                    Equipment and Machinery
                  </Box>
                </Box>
                <Button variant={"tertiary"} width={"full"} size={"2xl"}>
                  Purchase
                </Button>
              </VStack>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Center>
  );
};
