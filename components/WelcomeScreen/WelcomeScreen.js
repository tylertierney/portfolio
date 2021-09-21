import BrandedHeading from "../BrandedHeading";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import ProductFeature from "../ProductFeature";
import MobileScreenshots from "../MobileScreenshots";
import IconList from "../IconList";

import Image from "next/image";
import remoteControlPic from "../../public/tv.jpeg";

import Particles from "../Particles/Particles";

import { Flex, useColorModeValue } from "@chakra-ui/react";

import theme from "../theme.js";

const WelcomeScreen = () => {
  const bgGradientColor = useColorModeValue(
    theme.colors.brand.white,
    theme.colors.gray["700"]
  );

  return (
    <>
      <section>
        <Flex
          maxW="100%"
          minW="100%"
          w="100%"
          direction={["column", "column", "column", "row"]}
          justify={["flex-start", "flex-start", "space-around"]}
        >
          <Flex
            direction="column"
            p={[
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem",
            ]}
          >
            <BrandedHeading>
              Leading the Evolution in Local OTT & CTV Advertising
            </BrandedHeading>
            <BrandedSubheading>
              Full-service solutions in 110+ markets
            </BrandedSubheading>
            <Flex w="100%" mb="2rem">
              <BrandedOutlineBtn props={{ color: "red", mr: "0.8rem" }}>
                Connect With Us
              </BrandedOutlineBtn>
              <BrandedOutlineBtn props={{ color: "blue" }}>
                View Examples
              </BrandedOutlineBtn>
            </Flex>
          </Flex>
          <Flex
            position="relative"
            justify="center"
            // mb="2rem"
            minW={["100vw", "100vw", "100vw", "500px"]}
            zIndex="-1"
          >
            <Image
              priority={true}
              alt="Person watching television"
              src={remoteControlPic}
            />
            <Flex
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg={[
                ``,
                ``,
                ``,
                `linear-gradient(90deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 36%)`,
              ]}
            ></Flex>
          </Flex>
        </Flex>
      </section>
      <section className="flexColumn" style={{ alignItems: "center" }}>
        <Flex
          //   bgColor="gray.500"
          align="center"
          direction={["column", "column", "column", "row"]}
          pt="2rem"
          mt={["2rem", "2rem", "2rem", "0"]}
          //   mt="2rem"
          boxShadow="0px 0px 20px 1px rgb(0, 0, 0, 0.3)"
        >
          <ProductFeature
            icon="AiOutlineSafety"
            title="100% Brand-Safe Inventory"
            paragraph="We deliver your ads in brand-safe, premium content."
          />
          <ProductFeature
            icon="HiOutlineUserGroup"
            title="Audience Targeting"
            paragraph="We reach your desired audiences at scale using a catalogue of advanced targeting techniques."
          />
          <ProductFeature
            icon="GoGraph"
            title="Insights & Analytics"
            paragraph="We deliver transparent reporting and actionable insights."
          />
        </Flex>
      </section>
      <section
        className="flexColumn"
        style={{ alignItems: "center", marginBottom: "2rem" }}
      >
        <Flex
          // direction={["column", "column", "column", "row"]}
          pt="2rem"
          //   mt={["1rem", "2rem", "2rem", "0"]}
        >
          <Flex
            direction={["column", "column", "column", "row"]}
            p={[
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem",
            ]}
          >
            <Flex direction="column">
              <BrandedHeading>
                Complete control at your fingertips
              </BrandedHeading>
              <BrandedParagraph>
                Direct and analyze your campaign using our companion app.
              </BrandedParagraph>
            </Flex>
            <MobileScreenshots />
          </Flex>
        </Flex>
      </section>
      <section
        style={{
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        <Particles />
        <IconList
          items={[
            {
              icon: "BiSpreadsheet",
              text: "Track impressions, conversion rates, and audience analytics.",
            },
            {
              icon: "FiEdit",
              text: "Adjust your campaign content to suit your changing business needs.",
            },
            {
              icon: "BsChatDots",
              text: "24/7 support from our network of advertising experts.",
            },
          ]}
        />
      </section>
    </>
  );
};

export default WelcomeScreen;
