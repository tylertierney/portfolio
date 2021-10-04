import { Flex } from "@chakra-ui/react";

const Navmenu = ({
  handleScroll,
  isNavmenuShowing,
  projectsRef,
  experienceRef,
  contactRef,
}) => {
  const menuItems = [
    { name: "Projects", ref: projectsRef },
    // { name: "Experience", ref: experienceRef },
    { name: "Contact", ref: contactRef },
  ];

  let animation = "";

  if (isNavmenuShowing) {
    animation = "slidein";
  } else {
    animation = "slideaway";
  }

  return (
    <Flex
      animation={`${animation} 0.3s ease-in-out forwards`}
      color="brand.text.dark"
      h="100%"
      w="90%"
      justify="flex-start"
    >
      {menuItems.map((item, index) => {
        return (
          <Flex
            transition="0.4s ease-in-out"
            fontSize={["0.8rem", "0.9rem", "1rem"]}
            paddingX={["0.6rem", "0.8rem", "1.2rem"]}
            cursor="pointer"
            _hover={{
              color: "brand.primary.1000",
            }}
            justify="center"
            align="center"
            onClick={() => handleScroll(item.ref)}
            key={index}
          >
            {item.name}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Navmenu;
