import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "../components/LoginModal";

export function WelcomePage() {
  const [isPanelHidden, setIsPanelHidden] = useState<boolean>(true);

  const toggle = () => {
    setIsPanelHidden((previousPanelHidden) => !previousPanelHidden);
  };

  return (
    <>
      <div className="grow w-full flex items-center pb-24">
        <PageContent toggle={toggle} />
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
