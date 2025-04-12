import { routing } from "@/i18n/routing";
import Head from "next/head";
import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import type { Metadata } from "next";
// Метадата
export const metadata: Metadata = {
  title: "О компании | Digital Agency Acsais",
  description: "Страница о компании и проекте",
};

// Components
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";

const AboutPage = () => {
  const t = useTranslations("about");
  return (
    <section className={styles.page}>
      <Head>
        <title>This is the title of the page.</title>
      </Head>
      <div className={styles.page__container}>
        <div className={styles.page__header}>
          <Htag tag="h1">{t("about__title")}</Htag>
          <Ptag size="lead">{t("about__description")}</Ptag>
          <div className={styles.content__text_box}>
            <div className={styles.content__text}>
              <Ptag size="lead">{t("about_item1")}</Ptag>
              <p></p>
            </div>
            <div className={styles.content__text}>
              <Ptag size="lead">{t("about_item2")}</Ptag>
            </div>
            <div className={styles.content__text}>
              <Ptag size="lead">{t("about_item3")}</Ptag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
