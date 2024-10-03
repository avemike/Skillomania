import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

/**
 * Renders a standard layout.
 */
export function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      className="bg-[url('./assets/welcome_website.svg')]"
      minHeight="100%"
      width="100%"
      direction="column"
      bgSize="cover"
      bgPosition="center"
    >
      <Box width="100%" mx="auto">
        {children}
      </Box>
    </Flex>
  );
}
