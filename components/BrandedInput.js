import {
  Input,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Button,
  InputRightElement,
} from "@chakra-ui/react";

import { useState } from "react";

const BrandedInput = ({ name, props, isLoading, state, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl isRequired id={name} isDisabled={isLoading}>
      <InputGroup>
        <Input
          value={state.value}
          onChange={state.onChange}
          type={type}
          placeholder={name}
          name={name}
          id={name}
          {...props}
        />
        {type === "password" && (
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
        )}
      </InputGroup>
      <FormErrorMessage>wrong</FormErrorMessage>
    </FormControl>
  );
};

export default BrandedInput;
