import React from "react";
import { Box, Heading, Text } from "../elements";
import { Center, Grid, VStack } from "@/panda/jsx";
import Image from "next/image";

const galleries = [
  {
    image: "/images/gallery-1.png",
    title: "Lawn Care",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-2.png",
    title: "Free Consultations",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-3.png",
    title: "Irrigation Systems",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-2.png",
    title: "Seasonal Maintenance",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-3.png",
    title: "Weater Features",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-1.png",
    title: "Gardeners",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-2.png",
    title: "Weater Features",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
  {
    image: "/images/gallery-3.png",
    title: "Gardeners",
    desc: "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
  },
];

export const Gallery = () => {
  return (
    <Center flexDir={"column"} gap={"16"} w={"inherit"}>
      <VStack maxW={"2xl"} gap={"6"}>
        <Heading
          as="h2"
          textStyle={"5xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          EverGreen{" "}
          <Box
            as="mark"
            bg={"transparent"}
            color={"green.500"}
            fontWeight={"inherit"}
            fontSize={"inherit"}
          >
            Gallery
          </Box>
        </Heading>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit.
        </Text>
      </VStack>

      <Grid columns={4} gap={"12"} w={"inherit"}>
        {galleries.map((gallery) => (
          <Box
            key={gallery.title}
            position={"relative"}
            height={"xs"}
            borderRadius={"2xl"}
            overflow={"hidden"}
          >
            <Box
              position={"relative"}
              bg="neutral.200"
              width={"inherit"}
              height={"inherit"}
            >
              <Image
                src={gallery.image}
                alt={gallery.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
            <Box
              top={"0"}
              position={"absolute"}
              width={"full"}
              height={"full"}
              bg={"green.500"}
              transition={"opacity"}
              transitionDuration={"slower"}
              opacity={0}
              _hover={{ opacity: 1 }}
            >
              <VStack
                height={"inherit"}
                justify={"center"}
                p={"6"}
                color={"white"}
                textAlign={"center"}
              >
                <Heading as="h5" textStyle={"2xl"} color={"white"}>
                  {gallery.title}
                </Heading>
                <Text>{gallery.desc}</Text>
                <Text as={"span"} textDecoration={"underline"}>
                  Read more...
                </Text>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Center>
  );
};
