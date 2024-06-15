import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPost/FeedPost";
import SuggesteUsers from "../../components/SuggesteUserse/SuggestedUsers";

export default function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPost />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggesteUsers />
        </Box>
      </Flex>
    </Container>
  );
}
