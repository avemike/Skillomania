import { Text, Button, Link, Input, Flex, Box } from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Register() {
  return (
    <div className="h-dvh w-svw absolute top-0 left-0  ">
      <div className="z-10 h-dvh w-svw absolute top-0 left-0 backdrop-blur backdrop-brightness-50">
        <div className="absolute z-20 h-2/3 w-2/4 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-gray-600 shadow-lg ">
          <div className="h-full w-1/2 ">
            <div className="flex flex-col m-10 mt-20">
              <Text fontSize="2xl" as="b" mb="4">
                Register
              </Text>
              <Flex>
                <Box mt="6" mb="2" width="50%">
                  <label htmlFor="Username" className="text-sm font-bold ">
                    Username
                  </label>
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
                  <label htmlFor="email" className="text-sm font-bold ">
                    Email
                  </label>
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
                  <label htmlFor="Username" className="text-sm font-bold ">
                    Password
                  </label>
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
                  <label htmlFor="password" className="text-sm font-bold ">
                    Password
                  </label>
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

              <div className="flex mt-3 justify-between px-16">
                <Text fontSize="xs" as="b">
                  Have an account?
                </Text>
                <Link href="/" fontSize="xs">
                  Go back to the main page
                </Link>
              </div>
            </div>
            <div className="bg-[url('./assets/woman.svg')] h-44 w-96 absolute bottom-2 left-0 "></div>
          </div>
          <div className="bg-[url('./assets/login.svg')] h-full w-1/2 bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
