import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Text, Box } from "@chakra-ui/react";
import { LoginModal } from "../components/LoginModal";

export function WelcomePage() {
  const [isPanelHidden, setIsPanelHidden] = useState<boolean>(true);
  const { t } = useTranslation();
  const toggle = () => {
    setIsPanelHidden((previousPanelHidden) => !previousPanelHidden);
  };

  return (
    <>
      <div className="h-dvh w-svw">
        <div className="flex flex-col items-start absolute left-60 top-1/3">
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
        </div>
        {/* ogolnie to to powinno byc na dole strony ale jeszcze nie wiem jak to zrobic */}
        <Box borderTopWidth="2px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.200" maxW="sm">
            Skillomania
          </Text>
        </Box>

        {/* <div className="absolute flex bottom-16 left-20 border-t-gray-100 border-t-2 w-11/12">
          <Text fontSize="sm" color="gray.200">
            Skillomania
          </Text>
        </div> */}
      </div>
      <LoginModal isOpen={!isPanelHidden} onClose={toggle} />
    </>
  );
}

function PageContent({ toggle }: { toggle: () => void }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <h1 className="font-bold text-7xl bg-clip-text text-black">
        {t("home.welcome")}
      </h1>
      <h2 className="text-2xl my-4 text-gray-500">
        {t("home.toThe")}
        <b> skillomania</b>
      </h2>
      <p className="text-gray-500">{t("home.hereWeUpgradeSkills")}</p>
      <p className="text-gray-500 mb-6">{t("home.ifYouAreInterested")}</p>
      <button
        className=" hover:shadow-indigo-100/50 shadow-lg shadow-indigo-100/50 text-white bg-black"
        onClick={toggle}
      >
        {t("home.checkUsOut")}
      </button>
    </div>
  );
}
