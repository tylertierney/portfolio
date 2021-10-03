import {
  Input,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Button,
  InputRightElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState } from "react";

const BrandedInput = ({ name, props, isLoading, state, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const textColor = useColorModeValue("brand.text.dark", "brand.text.light");

  return (
    <FormControl isRequired id={name} isDisabled={isLoading}>
      {type === "textarea" ? (
        <Textarea
          _focus={{ outline: "none" }}
          placeholder={name}
          color={textColor}
        />
      ) : (
        <InputGroup>
          <Input
            color={textColor}
            value={state.value}
            onChange={state.onChange}
            type={type}
            placeholder={name}
            name={name}
            id={name}
            _focus={{ outline: "none" }}
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
      )}
      <FormErrorMessage>wrong</FormErrorMessage>
    </FormControl>
  );
};

export default BrandedInput;
