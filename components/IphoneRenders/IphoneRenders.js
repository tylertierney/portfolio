import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";

import linkbase_phone from "../../public/images/linkbase_phone.png";
import linkbase_phone2 from "../../public/images/linkbase_phone2.png";

const IphoneRenders = () => {
  return (
    <Box
      mb="2rem"
      display="flex"
      //some
      justifyContent="center"
      border="solid red 1px"
    >
      <Box
        display="inline-flex"
        position="relative"
        border="solid blue 1px"
        // left={["-20px", "-20px", "0px", "0px", "0px"]}
      >
        <Flex
          maxW="240px"
          minW="240px"
          position="relative"
          className="linkbaseIphoneRender"
          zIndex="2"
        >
          <Image
            alt="LinkBase iPhone Mockup"
            src={linkbase_phone}
            placeholder="blur"
            layout="intrinsic"
            className="linkbaseIphoneRender"
          />
        </Flex>
        <Flex
          maxW="240px"
          minW="240px"
          position="relative"
          className="linkbaseIphoneRender"
          top="50px"
          left="-140px"
        >
          <Image
            alt="LinkBase iPhone Mockup"
            src={linkbase_phone2}
            placeholder="blur"
            layout="intrinsic"
            className="linkbaseIphoneRender"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default IphoneRenders;
