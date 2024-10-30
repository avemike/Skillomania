import { Box, Button, Center, Flex, Slide } from "@chakra-ui/react";
import { useState } from "react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Random() {
  const [isPanelHidden, setIsPanelHidden] = useState<boolean>(true);

  const toggle = () => {
    setIsPanelHidden((previousPanelHidden) => !previousPanelHidden);
  };
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
            w="100%"
            p={4}
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
          >
            <Button onClick={toggle}>Surprise me!</Button>
          </Box>
        </Center>
      </Flex>
      {!isPanelHidden ? (
        <Box
          height="100%"
          width="100%"
          zIndex="10"
          position="absolute"
          top="0"
          left="0"
          backdropFilter="auto"
          backdropBlur="8px"
          backdropContrast="80%"
          onClick={toggle}
        >
          <Slide in={!isPanelHidden} direction="top" style={{ zIndex: 10 }}>
            <Box height="50vh" width="40vw" bgColor="blue"></Box>
          </Slide>
        </Box>
      ) : (
        <Box></Box>
      )}
    </>
  );
}
