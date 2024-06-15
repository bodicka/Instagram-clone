import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react";
import SuggesteHeader from "./SuggesteHeader";
import SuggesteUserse from "./SuggesteUserse";
import useGetSuggestedUsers from "../hooks/useGetSuggestedUsers";

export default function SuggesteUsers() {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggesteHeader />

      {suggestedUsers.length !== 0 && (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <Text fontSize={14} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggesteUserse key={user.id} user={user} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        ©️ 2024 Built By{" "}
        <Link
          href="https://github.com/bodicka"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          bodicka
        </Link>
      </Box>
    </VStack>
  );
}
