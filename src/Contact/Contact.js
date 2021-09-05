import ThemeContext from "../ThemeContext/ThemeContext";
import { useContext } from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";

import "./contact.css";

import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      style={{ background: theme.aboutSectionBackground, minHeight: "300px" }}
      className="contactContainer"
    >
      <header className="contactHeader">
        <span
          className="contactHeader"
          style={{ color: theme.text, borderColor: theme.aboutHeaderUnderline }}
        >
          contact
        </span>
      </header>

      <Flex h="100%" minH="160px" w="100%" align="center" justify="center">
        <Icon color={theme.text} fontSize="2rem" as={HiOutlineMail} mr="10px" />
        <Text color={theme.text} fontSize="1.3rem">
          <a href="mailto: tytierney@yahoo.com">tytierney@yahoo.com</a>
        </Text>
      </Flex>
    </section>
  );
};

export default Contact;
