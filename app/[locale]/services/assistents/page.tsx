import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./assistents.module.css";
// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Разработка AI ассистентов | Digital Agency Acsais",
  description: "Услуга разработки AI ассистентов",
};

// Components
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import ListIcons from "@/components/elements/ListIcons/ListIcons";
import ContactForm from "@/components/elements/ContactForm/Contact";

const AiService = () => {
  const t = useTranslations("assistents");

  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <div className={styles.page__header}>
          <Htag tag="h1">{t("page__title")}</Htag>
          <Ptag size="lead">{t("page__description")}</Ptag>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Htag tag="h3">{t("service1__title")}</Htag>
            <ListIcons>{t("service1__item1")}</ListIcons>
            <ListIcons>{t("service1__item2")}</ListIcons>
            <ListIcons>{t("service1__item3")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 5 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service2__title")}</Htag>
            <ListIcons>{t("service2__item1")}</ListIcons>
            <ListIcons>{t("service2__item2")}</ListIcons>
            <ListIcons>{t("service2__item3")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 25 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service3__title")}</Htag>
            <ListIcons>{t("service3__item1")}</ListIcons>
            <ListIcons>{t("service3__item2")}</ListIcons>
            <ListIcons>{t("service3__item3")}</ListIcons>
            <ListIcons>{t("service3__item4")}</ListIcons>
            <ListIcons>{t("service3__item5")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 50 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service4__title")}</Htag>
            <ListIcons>{t("service4__item1")}</ListIcons>
            <ListIcons>{t("service4__item2")}</ListIcons>
            <ListIcons>{t("service4__item3")}</ListIcons>
            <ListIcons>{t("service4__item4")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 35 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service6__title")}</Htag>
            <ListIcons>{t("service6__item1")}</ListIcons>
            <ListIcons>{t("service6__item2")}</ListIcons>
            <ListIcons>{t("service6__item3")}</ListIcons>
            <ListIcons>{t("service6__item4")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 35 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service7__title")}</Htag>
            <ListIcons>{t("service7__item1")}</ListIcons>
            <ListIcons>{t("service7__item2")}</ListIcons>
            <ListIcons>{t("service7__item3")}</ListIcons>
            <ListIcons>{t("service7__item4")}</ListIcons>
            <ListIcons>{t("service7__item5")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 35 000 ₽
            </Ptag>
          </div>
          <div className={styles.item}>
            <Htag tag="h3">{t("service8__title")}</Htag>
            <ListIcons>{t("service8__item1")}</ListIcons>
            <ListIcons>{t("service8__item2")}</ListIcons>
            <Ptag size="lead" className={styles.number}>
              {t("price")} 25 000 ₽
            </Ptag>
          </div>
        </div>
        <div className={styles.form__header}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AiService;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
