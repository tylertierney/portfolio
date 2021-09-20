import Menu from "../Menu/Menu";
import { useUser } from "../../context/authContext";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { generateKey } from "../../utils/helperFunctions";

const UserMenu = () => {
  const { user, logout } = useUser();

  const menuItems = [
    {
      text: "Log Out",
      icon: <Icon as={BiLogOut} />,
      onclick: logout,
    },
  ];

  const menuIcon = [
    <ChevronDownIcon
      // key={generateKey()}
      key="1234567"
      fontSize="1.4rem"
    />,
    <ChevronUpIcon
      // key={generateKey()}
      key="509887123487969765"
      fontSize="1.4rem"
    />,
  ];

  return (
    <Menu menuName={user?.username} menuIcon={menuIcon} menuItems={menuItems} />
  );
};

export default UserMenu;
