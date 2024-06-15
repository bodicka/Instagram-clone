import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogaut from "../hooks/useLogaut";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

export default function SuggesteHeader() {
  const { handleLogout, isLoggingOut } = useLogaut();
  const authUser = useAuthStore((state) => state.user);

  if(!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        onClick={handleLogout}
        isLoading={isLoggingOut}
        size={"sm"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
}
