import { routing } from "@/i18n/routing";
import ListIcons from "@/components/elements/ListIcons/ListIcons";
import { useTranslations } from "next-intl";
import styles from "./dev.module.css";
// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Разработка PWA сайтов | Digital Agency Acsais",
  description: "Услуга разработки PWA сайтов",
};

// Components
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import ContactForm from "@/components/elements/ContactForm/Contact";
import { Tag } from "@/components/elements/Tag/Tag";

const DevelopmentService = () => {
  const t = useTranslations("development");

  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <div className={styles.page__header}>
          <Htag tag="h1">{t("title")}</Htag>
          <Ptag size="lead">{t("description")}</Ptag>
        </div>
        <div className={styles.advantages}>
          <div className={styles.advantages__item}>
            <div className={styles.number}>25%</div>
            <Ptag>{t("card1__description")}</Ptag>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.number}>10%</div>
            <Ptag>{t("card2__description")}</Ptag>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.number}>40%</div>
            <Ptag>{t("card3__description")}</Ptag>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.number}>70%</div>
            <Ptag>{t("card4__description")}</Ptag>
          </div>
        </div>
        <div className={styles.opportunities}>
          <div className={styles.left}>
            <ListIcons>{t("option_1")}</ListIcons>
            <ListIcons>{t("option_2")}</ListIcons>
            <ListIcons>{t("option_3")}</ListIcons>
            <ListIcons>{t("option_4")}</ListIcons>
            <ListIcons>{t("option_5")}</ListIcons>
          </div>
          <div className={styles.right}>
            <ListIcons>{t("option_6")}</ListIcons>
            <ListIcons>{t("option_7")}</ListIcons>
            <ListIcons>{t("option_8")}</ListIcons>
            <ListIcons>{t("option_9")}</ListIcons>
          </div>
        </div>
        <div className={styles.badges}>
          <Tag size="m" color="ghost">
            Nest JS
          </Tag>
          <Tag size="m" color="ghost">
            Python
          </Tag>
          <Tag size="m" color="ghost">
            Django
          </Tag>
          <Tag size="m" color="ghost">
            Fast API
          </Tag>
          <Tag size="m" color="ghost">
            Docker
          </Tag>
          <Tag size="m" color="ghost">
            Mongo DB
          </Tag>
          <Tag size="m" color="ghost">
            PostgresQL
          </Tag>
          <Tag size="m" color="ghost">
            Yandex Data Base
          </Tag>
          <Tag size="m" color="ghost">
            Yandex Storage
          </Tag>
          <Tag size="m" color="ghost">
            Yandex GPT
          </Tag>
          <Tag size="m" color="ghost">
            React JS
          </Tag>
          <Tag size="m" color="ghost">
            Next JS
          </Tag>
          <Tag size="m" color="ghost">
            Type Script
          </Tag>
          <Tag size="m" color="ghost">
            Redux Toolkit
          </Tag>
          <Tag size="m" color="ghost">
            Zustand
          </Tag>
          <Tag size="m" color="ghost">
            React Query
          </Tag>
          <Tag size="m" color="ghost">
            SASS | SCSS
          </Tag>
          <Tag size="m" color="ghost">
            Framer Motion
          </Tag>
          <Tag size="m" color="ghost">
            i18next
          </Tag>
          <Tag size="m" color="ghost">
            PWA
          </Tag>
        </div>
        <div className={styles.form__header}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentService;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
