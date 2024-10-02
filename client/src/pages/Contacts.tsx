import { Text, Flex, Link } from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Contacts() {
  return (
    <>
      {" "}
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        bgColor="pink.300"
        alignItems="center"
        top="0"
        left="0"
        position="absolute"
      >
        <Flex
          bg="gray.200"
          p="20"
          borderRadius="lg"
          direction="column"
          textAlign="center"
          boxShadow="md"
        >
          <Text mb="3">Check us out on:</Text>
          <Link href="/" fontSize="sm">
            Instagram
          </Link>
          <Link href="/" fontSize="sm">
            Facebook
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
