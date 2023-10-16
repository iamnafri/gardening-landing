import { Button, Heading } from "@/components/elements";
import {
  AboutUs,
  Article,
  ContactUs,
  Faq,
  Footer,
  Gallery,
  Header,
  Hero,
  OurService,
  Pricing,
  Testimoni,
  WhyChooseUs,
} from "@/components/ui";
import { Container, VStack } from "@/panda/jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Container
        display={"flex"}
        flexDir={"column"}
        py={"16"}
        w={"full"}
        gap={"32"}
      >
        <AboutUs />
        <WhyChooseUs />
        <OurService />
        <Pricing />
        <Gallery />
        <Testimoni />
        <Faq />
        <Article />
        <ContactUs />
      </Container>
      <Footer />
    </>
  );
}
