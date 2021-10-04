import BrandedInput from "../BrandedInput";
import useInput from "../../hooks/useInput";
import {
  VStack,
  FormControl,
  FormErrorMessage,
  Text,
  Flex,
  Alert,
  AlertIcon,
  Icon,
} from "@chakra-ui/react";
import BrandedHeading from "../BrandedHeading";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineStop } from "react-icons/ai";
import Link from "next/link";

import { useState } from "react";

const Contact = () => {
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
    setSuccess(false);
    setSuccessOrError("error");
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    setIsLoading(false);
  };

  const marginBottom = successOrError ? "0rem" : "2rem";

  return (
    <>
      <BrandedHeading props={{ p: "0rem 0", pb: "0.1rem" }}>
        Contact
      </BrandedHeading>
      <BrandedHeading
        props={{
          color: "red",
          lineHeight: "0.1rem",
          mt: "-1rem",
          mb: marginBottom,
          pb: "1.5rem",
          overflow: "visible",
        }}
      >
        ...
      </BrandedHeading>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex
          w="100vw"
          justify="center"
          pb="2rem"
          // minW={["98vw", "98vw", "560px"]}

          //sa'lofjasld;fj
        >
          <VStack
            // w="100%"
            spacing={6}
            maxW="600px"
            w="75%"
          >
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
              name="Full Name"
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
              <BrandedOutlineBtn type="submit" isLoading={isLoading}>
                Submit
              </BrandedOutlineBtn>
            </Flex>
          </VStack>
        </Flex>
      </form>
    </>
  );
};

export default Contact;
