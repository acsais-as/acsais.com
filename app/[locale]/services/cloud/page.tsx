import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./dev.module.css";
// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Облачная инфраструктура | Digital Agency Acsais",
  description: "Услуга администрирования Web проектов на Yandex Cloud",
};

// Components
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import ContactForm from "@/components/elements/ContactForm/Contact";

const CloudService = () => {
  const t = useTranslations("cloud");
  const m = useTranslations("form");
  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <div className={styles.page__header}>
          <Htag tag="h1">{t("title")}</Htag>
          <Ptag size="lead">{t("description")}</Ptag>
        </div>
        <div className={styles.features}>
          <div className={styles.features__items}>
            <div className={styles.features__item}>
              <Htag tag="h3">{t("card1_title")}</Htag>
              <Ptag size="p">{t("card1_description")}</Ptag>
            </div>
            <div className={styles.features__item}>
              <Htag tag="h3">{t("card2_title")}</Htag>
              <Ptag size="p">{t("card2_description")}</Ptag>
            </div>
            <div className={styles.features__item}>
              <Htag tag="h3">{t("card3_title")}</Htag>
              <Ptag size="p">{t("card3_description")}</Ptag>
            </div>
            <div className={styles.features__item}>
              <Htag tag="h3">{t("card4_title")}</Htag>
              <Ptag size="p">{t("card4_description")}</Ptag>
            </div>
          </div>
        </div>
        <div className={styles.form__header}>
          <Htag tag="h2">{m("form__title")}</Htag>
          <Ptag size="lead">{m("form__description")}</Ptag>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CloudService;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
