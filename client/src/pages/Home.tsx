import { Text, Box, Button } from "@chakra-ui/react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Home() {
  return (
    <Box
      bgPosition="center"
      bgSize="cover"
      w="calc(100vw)"
      h="calc(100vh)"
      mt="32"
    >
      <Box ml="10%">
        <Text fontSize="5xl" as="b">
          Welcome to Skillomania
        </Text>
        <Text fontSize="xl" my="3">
          Maybe new challenge for today?
        </Text>
        <Button bgColor="blue" color="white" px="10" mt="5%">
          Daily
        </Button>
      </Box>
      <Box
        className="bg-[url('./assets/arrows.svg')]"
        borderRadius="full"
        top="21%"
        bgPosition="center"
        bgSize="cover"
        width="20%"
        height="33%"
        left="4.5%"
        position="absolute"
      ></Box>
    </Box>
  );
}
