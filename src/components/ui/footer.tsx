import React from "react";
import { Box, Button, Heading, Input, Text } from "../elements";
import { Container, HStack, VStack } from "@/panda/jsx";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { EverGreen } from "../icons";

const links = [
  {
    href: "#",
    name: "About Us",
  },
  {
    href: "#",
    name: "Service",
  },
  {
    href: "#",
    name: "Pricing",
  },
  {
    href: "#",
    name: "Blog",
  },
];

const contacts = [
  {
    icon: MailIcon,
    text: "hello@website.com",
  },
  {
    icon: MapPinIcon,
    text: "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
  },
  {
    icon: PhoneIcon,
    text: "451-484-5939",
  },
];

const socials = [
  {
    icon: TwitterIcon,
    link: "http://twitter.com",
  },
  {
    icon: InstagramIcon,
    link: "http://instagram.com",
  },
  {
    icon: FacebookIcon,
    link: "http://facebook.com",
  },
  {
    icon: YoutubeIcon,
    link: "http://youtube.com",
  },
];

export const Footer = () => {
  return (
    <Box as={"footer"} bg={"green.950"}>
      <Container display={"flex"} alignItems={"start"} py={"16"} gap={"8"}>
        <VStack
          alignItems={"start"}
          w={"xs"}
          gap={"10"}
          py={"2"}
          color={"white"}
        >
          <EverGreen />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </Text>
          <HStack gap={"8"}>
            {socials.map((social) => (
              <Box
                as="a"
                href={social.link}
                target="_blank"
                key={social.link}
                p={"2"}
                cursor={"pointer"}
                borderWidth={"1px"}
                borderColor={"white"}
                borderRadius={"lg"}
                _hover={{ color: "green.500", background: "white" }}
              >
                <social.icon />
              </Box>
            ))}
          </HStack>
        </VStack>
        <VStack alignItems={"start"} px={"4"} gap={"10"}>
          <Heading as="h6" color={"white"} textStyle={"lg"}>
            Quick Links
          </Heading>
          <Box
            as={"ul"}
            width={"full"}
            color={"white"}
            display={"flex"}
            flexDir={"column"}
          >
            {links.map((link) => (
              <Box
                key={link.name}
                as={"li"}
                py={"2"}
                _hover={{ color: "green.500" }}
              >
                <a href={link.href}>{link.name}</a>
              </Box>
            ))}
          </Box>
        </VStack>
        <VStack alignItems={"start"} px={"4"} gap={"10"} maxW={"xs"}>
          <Heading as="h6" color={"white"} textStyle={"lg"}>
            Contact Us
          </Heading>
          <Box
            as={"ul"}
            width={"full"}
            color={"white"}
            display={"flex"}
            flexDir={"column"}
          >
            {contacts.map((contact) => (
              <Box key={contact.text} as={"li"} py={"2"}>
                <HStack alignItems={"center"}>
                  <Box>
                    <contact.icon size={16} />
                  </Box>
                  <Text>{contact.text}</Text>
                </HStack>
              </Box>
            ))}
          </Box>
        </VStack>
        <VStack flex={"1"} alignItems={"start"} px={"4"} gap={"10"}>
          <Heading as="h6" color={"white"} textStyle={"lg"}>
            Newsletter
          </Heading>
          <HStack gap={"0"} width={"full"}>
            <Input
              size={"xl"}
              borderEndRadius={"none"}
              placeholder="Enter your email"
            />
            <Button borderStartRadius={"none"} size={"xl"}>
              Subscribe
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
