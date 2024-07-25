import en from "../../public/locales/en/translation.json";
import pl from "../../public/locales/pl/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof en;
    };
  }
}
