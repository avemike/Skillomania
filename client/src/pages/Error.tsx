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
        width={"80vw"}
        height={"85vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <Box
            bg="blue.200"
            w="100%"
            p={4}
            color="black"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Text fontSize="lg" as="b">
              Error
            </Text>
            <Text fontSize="md">
              Sorry, something must have gone wrong! <br />
              Maybe refreshing page would help?
            </Text>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
