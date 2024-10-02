import { Text, Flex } from "@chakra-ui/react";

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
        className=" h-dvh w-svw absolute top-0 left-0 justify-center "
        bgColor="pink.300"
        alignItems="center"
      >
        <Flex
          className=" shadow-slate-500/50 shadow-md "
          bg="gray.200"
          p="20"
          borderRadius="lg"
          direction="column"
          textAlign="center"
        >
          <Text mb="3">Check us out on:</Text>
          <Text fontSize="sm">Instagram</Text>
          <Text fontSize="sm">Facebook</Text>
        </Flex>
      </Flex>
    </>
  );
}
