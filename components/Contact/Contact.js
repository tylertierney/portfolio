import BrandedInput from "../BrandedInput";
import useInput from "../../hooks/useInput";
import {
  VStack,
  FormControl,
  FormErrorMessage,
  Text,
  Flex,
} from "@chakra-ui/react";
import BrandedHeading from "../BrandedHeading";
import BrandedOutlineBtn from "../BrandedOutlineBtn";

import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const name = useInput("");
  const email = useInput("");
  const subject = useInput("");
  const message = useInput("");

  const checkForErrors = () => {
    console.log("check for errors");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    checkForErrors();
    console.log("submit");
  };

  return (
    <section>
      <BrandedHeading props={{ p: "0rem 0", pb: "0.1rem" }}>
        Contact
      </BrandedHeading>
      <BrandedHeading
        props={{
          color: "red",
          lineHeight: "0.1rem",
          mt: "-1rem",
          mb: "2rem",
          pb: "1.5rem",
          overflow: "visible",
        }}
      >
        ...
      </BrandedHeading>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex w="100%" justify="center">
          <VStack w="100%" spacing={6} maxW="600px">
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
    </section>
  );
};

export default Contact;
