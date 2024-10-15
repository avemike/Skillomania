import { Box, Text, Center, Flex } from "@chakra-ui/react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Error() {
  return (
    <>
      {" "}
      <Flex
        w="calc(100vw)"
        h="calc(100vh)"
        alignContent="center"
        justifyContent="center"
      >
        <Center>
          <Box
            backdropFilter="auto"
            backdropBlur="8px"
            w="100%"
            p={4}
            color="black"
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
          >
            <Text fontSize="lg" as="b">
              Error
            </Text>
            <Text fontSize="md">
              An error occurred on the website and your page could not be
              served. You can try refreshing the page, maybe it's just a minor
              inconvenience
            </Text>
            <a href="/">Click on me to go back to the main page</a>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
