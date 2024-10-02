import { Text, Box, Button } from "@chakra-ui/react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Home() {
  return (
    <Box bgPosition="center" bgSize="cover" height="100%" width="100%" mt="32">
      <Box>
        <Text fontSize="5xl" as="b">
          Welcome to Skillomania
        </Text>
        <Text fontSize="xl" my="3">
          Maybe new challenge for today?
        </Text>
        <Button
          bgColor="blue"
          color="white"
          mt="5"
          mb="3"
          px="10"
          top="50$"
          left="10"
        >
          Daily
        </Button>
      </Box>
      <Box
        className="bg-[url('./assets/arrows.svg')]"
        borderRadius="full"
        top="50%"
        bgPosition="center"
        bgSize="cover"
        width="20%"
        height="33%"
        left="10"
        position="absolute"
      ></Box>
    </Box>
  );
}
