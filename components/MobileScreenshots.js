import { Flex } from "@chakra-ui/react";

import Image from "next/image";

import facilitytracker_mobile from "../public/images/screenshots/facilitytracker_mobile.png";
import facilitytracker_mobile2 from "../public/images/screenshots/facilitytracker_mobile2.png";
import facilitytracker_mobile3 from "../public/images/screenshots/facilitytracker_mobile3.png";
import thescoop_mobile from "../public/images/screenshots/thescoop_mobile.png";
import thescoop_mobile2 from "../public/images/screenshots/thescoop_mobile2.png";
import thescoop_mobile3 from "../public/images/screenshots/thescoop_mobile3.png";
import ecommerce_mobile from "../public/images/screenshots/ecommerce_mobile.png";
import ecommerce_mobile2 from "../public/images/screenshots/ecommerce_mobile2.png";
import ecommerce_mobile3 from "../public/images/screenshots/ecommerce_mobile3.png";

const screenshots = {
  facilitytracker: [
    facilitytracker_mobile,
    facilitytracker_mobile2,
    facilitytracker_mobile3,
  ],
  thescoop: [thescoop_mobile, thescoop_mobile2, thescoop_mobile3],
  ecommerce: [ecommerce_mobile, ecommerce_mobile2, ecommerce_mobile3],
};

const MobileScreenshots = ({ local_url }) => {
  return (
    <Flex justify="space-around" align="center" w="100%" mb="2rem" maxW="400px">
      <Flex w="30%" className="screenshots" mt="8%">
        <Image
          priority={true}
          alt="App screenshot"
          src={screenshots[local_url][0]}
          className="screenshots borderRadius"
        />
      </Flex>
      <Flex w="30%" className="screenshots" mt="4%">
        <Image
          priority={true}
          alt="App screenshot"
          src={screenshots[local_url][1]}
          className="screenshots borderRadius"
        />
      </Flex>
      <Flex w="30%" className="screenshots">
        <Image
          priority={true}
          alt="App screenshot"
          src={screenshots[local_url][2]}
          className="screenshots borderRadius"
        />
      </Flex>
    </Flex>
  );
};

export default MobileScreenshots;
