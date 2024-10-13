import { Box, Text, Center, Flex, Link } from "@chakra-ui/react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function About() {
  return (
    <Flex
      w="calc(100vw)"
      h="calc(100vh)"
      alignContent={"center"}
      justifyContent={"center"}
      overflow="hidden"
    >
      <Center>
        <Box
          bg="pink.100"
          w="100%"
          p={4}
          color="black"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Text fontSize="lg" as="b">
            This is skillomania, a page on which we learn or upgrade our skills!
          </Text>
          <Text fontSize="md">
            It's really easy, just register or log in (if you have an accout).
            <br />
            If you're feeling lost that's okay click the link bellow for a
            tutorial. <br />
            <Link color="teal.700" href="#">
              Show me how to use this website!
            </Link>
          </Text>
        </Box>
      </Center>
    </Flex>
  );
}
