import { Link, Text, Flex, Button } from "@chakra-ui/react";

export function Navbar() {
  const token = localStorage.getItem("token");

  console.log(token);

  return (
    <nav className="bg-transparent py-4">
      <Flex
        className="container"
        mx="auto"
        justify="between"
        alignItems="center"
      >
        <Flex className="flex-grow">
          <Link href="/">Home</Link>
        </Flex>
        <Flex gap="4">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/challenges">Challenges</Link>
        </Flex>
        <Flex alignItems="center" ml="auto">
          {token ? (
            <Text fontSize="md" ml="2">
              Logged in
            </Text>
          ) : (
            <Button colorScheme="AlphaBlack">Login</Button>
          )}
        </Flex>
      </Flex>
    </nav>
  );
}
