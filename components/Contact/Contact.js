import BrandedInput from "../BrandedInput";
import useInput from "../../hooks/useInput";
import {
  VStack,
  Text,
  Flex,
  Icon,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
import Link from "next/link";

import { useState } from "react";

const Contact = () => {
  const btnColor = useColorModeValue("gray.500", "brand.white");

  const [isLoading, setIsLoading] = useState(false);
  const [successOrError, setSuccessOrError] = useState("");

  const name = useInput("");
  const email = useInput("");
  const subject = useInput("");
  const message = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/sendgrid", {
        subject: subject.value,
        email: email.value,
        message: message.value,
      })
      .then((res) => handleSuccess())
      .catch((err) => handleError(err));
    console.log("submit");
  };

  const handleSuccess = () => {
    setSuccessOrError("success");
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    setIsLoading(false);
  };
  const handleError = (err) => {
    setSuccessOrError("error");
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    setIsLoading(false);
  };

  // const marginBottom = successOrError ? "0rem" : "2rem";

  return (
    <>
      <Flex direction="column" width="100%">
        <Heading size="2xl">Contact</Heading>
        <Heading size="2xl" className="sectionHeaderDots" color="red.400">
          ...
        </Heading>
      </Flex>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Flex w="100vw" justify="center" pb="2rem">
          <VStack spacing={6} maxW="600px" w="75%">
            {successOrError && (
              <Flex direction="column" align="center">
                {successOrError === "success" ? (
                  <>
                    <Icon
                      mb="1rem"
                      as={AiOutlineCheckCircle}
                      color="green"
                      fontSize="2rem"
                    />
                    <Text maxW="400px" textAlign="center">
                      Success! Your email has been received. I&apos;ll be in
                      touch within the next few days.
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon
                      mb="1rem"
                      as={AiOutlineStop}
                      color="red"
                      fontSize="2rem"
                    />
                    <Text maxW="400px" textAlign="center">
                      Whoops, looks like there was an error on my end. Shoot me
                      an email directly at{" "}
                      <Link href="mailto:tytierney@yahoo.com" passHref>
                        <a>
                          <Text as="span" textDecoration="underline">
                            tytierney@yahoo.com
                          </Text>
                        </a>
                      </Link>
                    </Text>
                  </>
                )}
              </Flex>
            )}
            <BrandedInput
              isLoading={isLoading}
              state={name}
              name="Name"
              type="text"
            />
            <BrandedInput
              isLoading={isLoading}
              state={email}
              name="Email"
              type="email"
            />
            <BrandedInput
              isLoading={isLoading}
              state={subject}
              name="Subject"
              type="text"
            />
            <BrandedInput
              isLoading={isLoading}
              state={message}
              name="Message"
              type="textarea"
            />
            <Flex w="100%" justify="flex-end">
              <Button
                type="submit"
                variant="outline"
                borderRadius="30px"
                color={btnColor}
                border="2px solid"
                borderColor="brand.primary.1000"
                transition="0.2s ease-in-out"
                _hover={{
                  backgroundColor: "brand.primary.1000",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </form>
    </>
  );
};

export default Contact;
