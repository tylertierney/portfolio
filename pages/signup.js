import {
  Input,
  InputGroup,
  VStack,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Text,
  Button,
  InputRightElement,
} from "@chakra-ui/react";

import useInput from "../hooks/useInput";
import { useState } from "react";

import BrandedButton from "../components/BrandedButton/BrandedButton";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("submitted");
    console.log(email, password);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <VStack>
        <Heading textAlign="center">Sign Up</Heading>

        <Text textAlign="center">
          Join millions of users from around the world
        </Text>
        <br />
        <Container
          maxW="500px"
          p="2rem 1rem"
          borderRadius="lg"
          boxShadow="0px 0px 20px 1px rgb(0, 0, 0, 0.3)"
        >
          <VStack align="center" spacing={5}>
            {/* <FormLabel>Email</FormLabel> */}
            <FormControl isRequired id="email" isDisabled={isLoading}>
              <InputGroup>
                <Input
                  value={email.value}
                  onChange={email.onChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </InputGroup>
              <FormErrorMessage>wrong</FormErrorMessage>
            </FormControl>
            <FormErrorMessage></FormErrorMessage>
            {/* <FormLabel>Password</FormLabel> */}
            <FormControl isRequired id="password" isDisabled={isLoading}>
              <InputGroup>
                <Input
                  value={password.value}
                  onChange={password.onChange}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outline"
                  name="password"
                  id="password"
                />
                <InputRightElement>
                  <Button
                    disabled={isLoading}
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                    p="1rem 1.8rem"
                    size="sm"
                    mr="1.8rem"
                    _focus={{ outline: "none" }}
                    color="brand.text.light"
                  >
                    Show
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>wrong</FormErrorMessage>
            </FormControl>
            <BrandedButton
              disabled={isLoading}
              action="submit"
              props={{ width: "100%" }}
            >
              Confirm
            </BrandedButton>
          </VStack>
        </Container>
      </VStack>
    </form>
  );
};

export default Login;
