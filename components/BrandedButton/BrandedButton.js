import { Button, Text, Icon } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLoaderCircle } from "react-icons/bi";

const BrandedButton = ({
  variant,
  action,
  color,
  href,
  children,
  props,
  disabled,
}) => {
  const ref = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [minW, setMinW] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setMinW(ref.current.getBoundingClientRect().width);

    const handleRouteChange = (url, { shallow }) => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // return () => {
    //   router.events.off("routeChangeComplete", handleRouteChange);
    // };
  }, []);

  let bgColor;
  let textColor;
  switch (color) {
    case "primary":
      bgColor = "brand.primary.1000";
      textColor = "white";
      break;
    case "secondary":
      bgColor = "brand.secondary.1000";
      textColor = "white";
      break;
    case "none":
      bgColor = "transparent";
      textColor = "brand.text.dark";
      break;
    default:
      bgColor = "brand.primary.1000";
      textColor = "white";
      break;
  }

  const noop = () => {};

  const button = (
    <Button
      ref={ref}
      disabled={action === "submit" ? disabled : isLoading}
      variant={variant}
      backgroundColor={bgColor}
      transition="0.3s ease-in-out"
      color={textColor}
      _hover={
        variant === "ghost"
          ? { opacity: "0.5" }
          : {
              boxShadow: "xl",
            }
      }
      _focus={{ outline: "none" }}
      p="0rem 0.6rem"
      onClick={action === "submit" ? noop() : () => setIsLoading(true)}
      minW={minW ? `${minW}px` : ""}
      style={props}
      // type={action === "submit" ? "submit" : ""}
      type="submit"
    >
      {isLoading ? (
        <Icon
          color={textColor}
          as={BiLoaderCircle}
          className="spinnerIcon"
          fontSize="1.3rem"
        />
      ) : (
        <Text as="span" color={textColor}>
          {children}
        </Text>
      )}
    </Button>
  );

  if (action === "link") {
    return <Link href={href}>{button}</Link>;
  } else {
    return button;
  }
};

export default BrandedButton;
