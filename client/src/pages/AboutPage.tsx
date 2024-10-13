import { Box, Text, Center, Flex, Link } from "@chakra-ui/react";
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function About() {
  return (
    <Flex
      width={"80vw"}
      height={"85vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center>
        <Box
          bg="pink.100"
          w="100%"
          p={4}
          color="black"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Text fontSize="lg" as="b">
            This is skillomania, a page on which we learn or upgrade our skills!
          </Text>
          <Text fontSize="md">
            It's really easy, just register or log in (if you have an accout).
            <br />
            If you're feeling lost that's okay click the link bellow for a
            tutorial. <br />
            <Link color="teal.700" href="#">
              Show me how to use this website!
            </Link>
          </Text>
        </Box>
      </Center>
    </Flex>
    // <div className="h-dvh w-svw flex flex-col text-center items-center justify-center">
    //   <div className="bg-white/50 p-10 round">
    //     <h1 className=" text-4xl">Hi!</h1>
    //     <h2 className=" text-2xl">
    //       This is skillomania, a page on which we learn or upgrade our skills!
    //     </h2>
    //     <p className="text-xl">
    //       It's really easy, just register or log in (if you have an accout).
    //       <br />
    //       If you're feeling lost that's okay click the link bellow for a
    //       tutorial.
    //     </p>
    //     <a href="" className=" text-lg ">
    //       Show me how to use this website!
    //     </a>
    //   </div>
    // </div>
  );
}
