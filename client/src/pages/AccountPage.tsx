import {
  Text,
  Box,
  Flex,
  Avatar,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function AccountPage() {
  return (
    <Box bgColor="white" w="calc(100vw)" h="calc(100vh)">
      <Flex direction="row">
        <Flex
          direction="column"
          width="15%"
          bgColor="gray.100"
          h="calc(100vh)"
          pl="5"
          pt="5"
          gap="5"
        >
          <Box>
            <Text>Catalog</Text>
            <UnorderedList>
              <ListItem>Quick challenge</ListItem>
              <ListItem>Challenge paths</ListItem>
              <ListItem>Lists</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Text>My challenges</Text>
            <Box
              height={10}
              width={10}
              borderRadius="full"
              borderWidth="10"
              bgColor="gray.300"
              margin="2"
              alignContent="center"
              textAlign="center"
            >
              3
            </Box>
          </Box>
          <Box>
            {" "}
            <Text>Challenge manager</Text>
          </Box>
        </Flex>
        <Flex
          direction="row"
          gap="2"
          pt="2"
          pr="5"
          justifyContent="end"
          width="100%"
        >
          <Box h="10" w="10" bgColor="pink" borderRadius="full"></Box>
          <Box h="10" w="10" bgColor="pink" borderRadius="full"></Box>
          <Avatar name="h g" h="10" w="10"></Avatar>
        </Flex>
      </Flex>
    </Box>
  );
}
