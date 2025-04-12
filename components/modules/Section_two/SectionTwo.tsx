import { useTranslations } from "next-intl";
import styles from "./sectionTwo.module.css";
import { BotMessageSquare, GlobeLock, TabletSmartphone } from "lucide-react";
// Components

const SectionTwo = () => {
  const t = useTranslations("section_two");
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.left}>
          <div className={styles.hero}>
            <h2 className={styles.hero__title}>{t("title")}</h2>
            <p className={styles.hero__slogan}>{t("description")}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.feature_accent}>
            <div className={styles.feature__icon}>
              <TabletSmartphone width={44} height={44} />
            </div>
            <div className={styles.feature__content}>
              <h3 className={styles.feature__title_accent}>
                {t("feature__title")}
              </h3>
              <p className={styles.feature__description_accent}>
                {t("feature__description")}
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>
              <BotMessageSquare width={44} height={44} />
            </div>
            <div className={styles.feature__content}>
              <h3 className={styles.feature__title}>{t("feature__title2")}</h3>
              <p className={styles.feature__description}>
                {t("feature__description2")}
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>
              <GlobeLock width={44} height={44} />
            </div>
            <div className={styles.feature__content}>
              <h3 className={styles.feature__title}>{t("feature__title3")}</h3>
              <p className={styles.feature__description}>
                {t("feature__description3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
