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
          width="12%"
          bgColor="gray.900"
          h="calc(100vh)"
          pt="5"
          gap="5"
          boxShadow="md"
        >
          <Box pb="10">
            <Text color="gray.200" ml="4" fontSize="lg" as="b">
              Skillomania
            </Text>
          </Box>
          <Box borderBottom="1px" borderColor="gray.500" pb="3">
            <Text color="gray.200" ml="4" fontSize="lg" as="b">
              Dashboard
            </Text>
          </Box>
          <Box borderBottom="1px" borderColor="gray.500" pb="3">
            <Text color="gray.200" ml="4" mt="3" mb="3">
              Catalog
            </Text>
            <UnorderedList>
              <ListItem color="gray.200" ml="4" fontSize="sm">
                Quick challenge
              </ListItem>
              <ListItem color="gray.200" ml="4" fontSize="sm">
                Challenge paths
              </ListItem>
              <ListItem color="gray.200" ml="4" fontSize="sm">
                Lists
              </ListItem>
            </UnorderedList>
          </Box>
          <Box borderBottom="1px" borderColor="gray.500" pb="3">
            <Text color="gray.200" ml="4">
              My challenges
            </Text>
            <Box
              height={10}
              width={10}
              borderRadius="full"
              borderWidth="10"
              bgColor="gray.300"
              margin="2"
              alignContent="center"
              textAlign="center"
              ml="25%"
              my="4"
              color="gray.900"
            >
              3
            </Box>
          </Box>
          <Box>
            {" "}
            <Text color="gray.200" ml="4">
              Challenge manager
            </Text>
          </Box>
        </Flex>
        <Flex direction="column" width="100%" height="100%">
          <Flex
            direction="row"
            gap="2"
            pt="2"
            pr="5"
            justifyContent="end"
            width="100%"
            height="20%"
          >
            <Box h="10" w="10" bgColor="gray.600" borderRadius="full"></Box>
            <Box h="10" w="10" bgColor="gray.600" borderRadius="full"></Box>
            <Avatar name="h g" h="10" w="10"></Avatar>
          </Flex>

          <Flex
            height="calc(90vh)"
            width="80%"
            direction="row"
            ml="18%"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bgColor="gray.900"
              width="30%"
              height="70%"
              borderRadius="lg"
              boxShadow="md"
            >
              <Text
                borderBottom="1px"
                borderColor="gray.500"
                py="3"
                mx="10"
                color="white"
                fontSize="lg"
              >
                My challenges
              </Text>
            </Box>
            <Flex
              direction="column"
              height="100%"
              width="50%"
              alignItems="start"
              justifyContent="center"
              gap="5%"
              ml="2%"
            >
              <Box
                bgColor="gray.900"
                width="40%"
                height="30%"
                borderRadius="lg"
                boxShadow="md"
              >
                <Text
                  borderBottom="1px"
                  borderColor="gray.500"
                  py="3"
                  mx="10"
                  color="white"
                  fontSize="lg"
                >
                  Tasks completed
                </Text>
              </Box>
              <Box
                bgColor="gray.900"
                width="40%"
                height="30%"
                borderRadius="lg"
                boxShadow="md"
              >
                <Text
                  borderBottom="1px"
                  borderColor="gray.500"
                  py="3"
                  mx="10"
                  color="white"
                  fontSize="lg"
                >
                  Recommended for you
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
