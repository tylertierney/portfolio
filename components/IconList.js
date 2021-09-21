import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";

import { BiSpreadsheet } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BsChat, BsChatDots } from "react-icons/bs";

const IconList = ({ items }) => {
  console.log(items);
  const listItemArray = items.map((item) => {
    let icon;

    switch (item.icon) {
      case "BiSpreadsheet":
        icon = BiSpreadsheet;
        break;
      case "FiEdit":
        icon = FiEdit;
        break;
      case "BsChatDots":
        icon = BsChatDots;
        break;
      default:
        icon = BiSpreadsheet;
    }
    console.log(icon);
    return (
      <ListItem>
        <ListIcon as={icon} />
        {item.text}
      </ListItem>
    );
  });

  return (
    <List>
      <ListItem>{listItemArray}</ListItem>
    </List>
  );
};

export default IconList;
