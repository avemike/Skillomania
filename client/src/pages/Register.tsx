import { Text, Button, Link, Input, Flex, Box } from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Register() {
  return (
    <Box height="100%" width="100%" position="absolute" top="0" left="0">
      <Box
        position="absolute"
        height="100%"
        width="100%"
        zIndex="10"
        top="0"
        left="0"
        backdropFilter="auto"
        backdropBlur="8px"
        backdropContrast="80%"
      >
        <Flex
          position="absolute"
          zIndex="20"
          height="64%"
          width="50%"
          bgColor="white"
          top="15%"
          left="25%"
          boxShadow="lg"
        >
          <Box height="100%" width="50%">
            <Flex direction="column" m="10" mt="20">
              <Text fontSize="2xl" as="b" mb="4">
                Register
              </Text>
              <Flex>
                <Box mt="6" mb="2" width="50%">
                  <Text fontSize="sm" as="b">
                    Username
                  </Text>
                  <Input
                    type="username"
                    h="10"
                    w="2/3"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    fontSize="sm"
                    pl="2"
                    placeholder="Think of a username"
                  />
                </Box>
                <Box mt="6" mb="2" width="50%">
                  <Text fontSize="sm" as="b">
                    Email
                  </Text>
                  <Input
                    type="email"
                    h="10"
                    w="2/3"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    fontSize="sm"
                    pl="2"
                    placeholder="Enter your mail address"
                  />
                </Box>
              </Flex>
              <Flex>
                <Box mt="2" mb="2" width="50%">
                  <Text fontSize="sm" as="b">
                    Password
                  </Text>
                  <Input
                    type="password"
                    h="10"
                    w="2/3"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    fontSize="sm"
                    pl="2"
                    placeholder="Password"
                  />
                </Box>
                <Box mt="2" mb="2" width="50%">
                  <Text fontSize="sm" as="b">
                    Password
                  </Text>
                  <Input
                    type="password"
                    h="10"
                    w="2/3"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    fontSize="sm"
                    pl="2"
                    placeholder="Repeat password"
                  />
                </Box>
              </Flex>
              <Button colorScheme="blue" color="white" mt="5" mb="3">
                Register
              </Button>

              <Flex justify="space-between" mt="3" px="16">
                <Text fontSize="xs" as="b">
                  Have an account?
                </Text>
                <Link href="/" fontSize="xs">
                  Go back to the main page
                </Link>
              </Flex>
            </Flex>
            <Box
              className="bg-[url('./assets/woman.svg')] h-44 w-96 "
              position="absolute"
              left="0"
              bottom="2"
            ></Box>
          </Box>
          <Box
            className="bg-[url('./assets/login.svg')] "
            height="full"
            width="50%"
            bgSize="cover"
            bgPosition="center"
          ></Box>
        </Flex>
      </Box>
    </Box>
  );
}
