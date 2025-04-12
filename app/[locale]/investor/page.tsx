import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Инвесторам | Digital Agency Acsais",
  description: "Предложение инвесторам от компании АКСАИС",
};

import styles from "./investoram.module.css";

// Components
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import Link from "next/link";

const CloudService = () => {
  const t = useTranslations("investoram");
  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <div className={styles.page__header}>
          <Htag tag="h1">{t("title")}</Htag>
          <Ptag size="lead">{t("description")}</Ptag>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Htag tag="h3">{t("item1__title")}</Htag>
            <Ptag size="lead">{t("item1__description")}</Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("item2__title")}</Htag>
            <Ptag size="lead">{t("item2__description")}</Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("item3__title")}</Htag>
            <Ptag size="lead">{t("item3__description")}</Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("item4__title")}</Htag>
            <Ptag size="lead">{t("item4__description")}</Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h2">{t("item5__title")}</Htag>
            <Ptag size="lead">{t("item5__description")}</Ptag>
            <Ptag size="lead">{t("podpiska_title")} </Ptag>
            <Link
              href="https://t.me/acsaisio"
              target="_blank"
              rel="noopener"
              className={styles.social_title}
            >
              <span className={styles.social}>{t("podpiska__button")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudService;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
