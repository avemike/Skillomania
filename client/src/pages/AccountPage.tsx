import {
  Text,
  Box,
  Flex,
  Avatar,
  ListItem,
  UnorderedList,
  OrderedList,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function AccountPage() {
  return (
    <Box
      w="calc(100vw)"
      h="calc(100vh)"
      className="bg-[url('./assets/bg_account.svg')]"
      bgColor="white"
      bgPosition="center"
      bgSize="cover"
    >
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
              borderRadius="lg"
              borderWidth="10"
              bgColor="gray.200"
              margin="2"
              alignContent="center"
              textAlign="center"
              ml="25%"
              my="4"
              color="gray.900"
            >
              4
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
            <Input
              placeholder="Search something!"
              size="sm"
              focusBorderColor="black"
              px="2"
            />
            <Box h="10" w="10" bgColor="gray.600" borderRadius="full"></Box>
            <Box h="10" w="10" bgColor="gray.600" borderRadius="full"></Box>
            <Avatar name="h g" h="10" w="10"></Avatar>
          </Flex>

          <SimpleGrid
            spacing={2}
            templateColumns="repeat(5, 20%)"
            templateRows="repeat(5, 45%)"
            mt="4%"
          >
            <Card
              bgColor="gray.800"
              p="5"
              m="2"
              color="white"
              borderRadius="lg"
              gridArea="1 / 1 / 4 / 2"
            >
              <CardHeader>
                <Heading size="lg" as="b">
                  {" "}
                  My challenges
                </Heading>
                <OrderedList>
                  <ListItem></ListItem>
                  <ListItem></ListItem>
                  <ListItem></ListItem>
                  <ListItem></ListItem>
                </OrderedList>
              </CardHeader>
              <CardBody>
                <Text>...</Text>
              </CardBody>
              <CardFooter>
                <Button mt="2">View here</Button>
              </CardFooter>
            </Card>
            <Card
              bgColor="gray.800"
              p="5"
              m="2"
              color="white"
              borderRadius="lg"
              gridArea="1 / 2 / 2 / 3"
            >
              <CardHeader>
                <Heading size="lg" as="b">
                  {" "}
                  Tasks completed
                </Heading>
                <StatGroup pt="2">
                  <Stat>
                    <StatLabel>Completed</StatLabel>
                    <StatNumber>4</StatNumber>
                  </Stat>

                  <Stat>
                    <StatLabel>In progress</StatLabel>
                    <StatNumber>2</StatNumber>
                  </Stat>
                </StatGroup>
              </CardHeader>
              <CardBody>
                <Text>...</Text>
              </CardBody>
              <CardFooter>
                <Button mt="2">View here</Button>
              </CardFooter>
            </Card>
            <Card
              bgColor="gray.800"
              p="5"
              m="2"
              color="white"
              borderRadius="lg"
              gridArea="2 / 2 / 4 / 3"
            >
              <CardHeader>
                <Heading size="lg" as="b">
                  {" "}
                  Recommended for you
                </Heading>
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Do your first pushup
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      No need for equipment just piece of the floor...
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Bake your first cake!
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      You will need no more than 8 ingredients...
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </CardHeader>
              <CardBody>
                <Text>...</Text>
              </CardBody>
              <CardFooter>
                <Button mt="2">View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>

          {/* <Flex
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
          </Flex> */}
        </Flex>
      </Flex>
    </Box>
  );
}
