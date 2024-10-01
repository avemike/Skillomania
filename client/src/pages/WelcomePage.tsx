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
        {/* ogolnie to to powinno byc na dole strony ale jeszcze nie wiem jak to zrobic */}
        <Box borderTopWidth="2px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.200" maxW="sm">
            Skillomania
          </Text>
        </Box>

        {/* <Box className="absolute flex bottom-16 left-20 border-t-gray-100 border-t-2 w-11/12">
          <Text fontSize="sm" color="gray.200">
            Skillomania
          </Text>
        </Box> */}
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
            <div className="h-full w-1/2 ">
              <div className="flex flex-col m-10 mt-16">
                <Text fontSize="2xl" as="b">
                  Hi!
                </Text>
                <Text fontSize="md">Enter your credentials to go further!</Text>
                <label htmlFor="email" className="text-sm font-bold mt-6 mb-2">
                  Email
                </label>
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
                <label
                  htmlFor="password"
                  className="text-sm font-bold mt-6 mb-2"
                >
                  Password
                </label>
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
                <div className="flex mb-6 mt-1">
                  <input
                    type="checkbox"
                    className="h-6 self-start mt-2.5 ml-1 rounded-none"
                  />
                  <Checkbox size="sm" colorScheme="blue"></Checkbox>
                  <label className="mt-3 ml-2 text-sm font-bold ">
                    Remember me
                  </label>
                </div>
                <Button color="white" colorScheme="blue">
                  Log in
                </Button>
                <Text fontSize="xs" color="gray" my="3" alignSelf="center">
                  Or log in with
                </Text>
                <GoogleAuthButton />
                <div className="flex mt-3 justify-between px-11">
                  <Text fontSize="xs" as="b">
                    Don't have an account?
                  </Text>
                  <Link href="/Register" fontSize="xs">
                    Register here
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-center bg-cover">
              <img
                src="login.svg"
                alt="Login background image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
