import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { Box, Flex } from "@chakra-ui/react";

/**
 * Renders a standard layout.
 */
export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      className=" bg-[url('./assets/welcome_website.svg')] "
      minHeight="100%"
      width="100%"
      bgPosition="center"
      bgSize="cover"
      direction="column"
    >
      <Navbar />
      <Box width="100%" mx="auto">
        {children}
      </Box>
      ;
    </Flex>
  );
}
