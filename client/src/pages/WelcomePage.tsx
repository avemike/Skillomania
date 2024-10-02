import { useState } from "react";
import { GoogleAuthButton } from "../components/GoogleAuthButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  Button,
  Text,
  Box,
  Flex,
  Input,
  Checkbox,
  Link,
  Image,
} from "@chakra-ui/react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function WelcomePage() {
  const { t } = useTranslation();
  const [isPanelHidden, setIsPanelHidden] = useState<boolean>(true);

  const toggle = () => {
    setIsPanelHidden((previousPanelHidden) => !previousPanelHidden);
  };

  return (
    <>
      <Box>
        <Flex py="250" alignItems="start" direction="column">
          <Text fontSize="6xl" as="b">
            {t("home.welcome")}
          </Text>

          <Text fontSize="2xl">
            {t("home.toThe")} <b> skillomania</b>{" "}
          </Text>

          <Text fontSize="md" color="gray.600" mt={2}>
            {t("home.hereWeUpgradeSkills")}
          </Text>
          <Text fontSize="md" color="gray.600">
            {t("home.ifYouAreInterested")}
          </Text>
          <Button colorScheme="blackAlpha" onClick={toggle} mt={5}>
            {t("home.checkUsOut")}
          </Button>
        </Flex>
        <Box borderTopWidth="2px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.200" maxW="sm">
            Skillomania
          </Text>
        </Box>
      </Box>
      {!isPanelHidden ? (
        <div
          className="z-10 h-dvh w-svw absolute top-0 left-0 backdrop-blur backdrop-brightness-50"
          onClick={toggle}
        >
          <div
            className="absolute z-20 min-w-96 w-[50%] max-w-[1000px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-gray-600 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <Box height="full" width="50%">
              <Flex className="flex-col" mt="16" m="10">
                <Text fontSize="2xl" as="b">
                  Hi!
                </Text>
                <Text fontSize="md">Enter your credentials to go further!</Text>
                <Text fontSize="sm" as="b" mt="6" mb="2">
                  Email
                </Text>
                <Input
                  type="email"
                  h="10"
                  w="2/3"
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="md"
                  placeholder="Enter your mail address"
                  fontSize="sm"
                  pl="2"
                />
                <Text fontSize="sm" as="b" mt="6" mb="2">
                  Password
                </Text>
                <Input
                  type="password"
                  h="10"
                  w="2/3"
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="md"
                  placeholder="Enter your password"
                  fontSize="sm"
                  pl="2"
                />
                <Flex mb="6" mt="1">
                  <input
                    type="checkbox"
                    className="h-6 self-start mt-2.5 ml-1 rounded-none"
                  />
                  <Checkbox size="sm" colorScheme="blue"></Checkbox>
                  <Text fontSize="xs" as="b" mt="3" mb="2" ml="1">
                    Remember me
                  </Text>
                </Flex>
                <Button color="white" colorScheme="blue">
                  Log in
                </Button>
                <Text fontSize="xs" color="gray" my="3" alignSelf="center">
                  Or log in with
                </Text>
                <GoogleAuthButton />
                <Flex className="justify-between" mt="3" px="11">
                  <Text fontSize="xs" as="b">
                    Don't have an account?
                  </Text>
                  <Link href="/Register" fontSize="xs">
                    Register here
                  </Link>
                </Flex>
              </Flex>
            </Box>
            <Box width="50%" bgPosition="center" bgSize="cover">
              <Image
                src="login.svg"
                alt="Login background image"
                height="100%"
                width="100%"
                objectFit="cover"
              />
            </Box>
          </div>
        </div>
      ) : (
        <Box></Box>
      )}
    </>
  );
}
