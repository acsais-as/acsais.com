import { useTranslations } from "next-intl";
import styles from "./sectionThree.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightToLine, CircleCheck } from "lucide-react";
// Components

const SectionThree = () => {
  const t = useTranslations("section_three");
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.hero}>
          <h2 className={styles.hero__title}>{t("title")}</h2>
          <p className={styles.hero__slogan}>{t("description")}</p>
          <div className={styles.services}>
            <div className={styles.card}>
              <h3 className={styles.card__title}>{t("card1__title")}</h3>
              <p className={styles.card__description}>
                {t("card1__description")}
              </p>
              <p className={styles.card__price}>От 150 000 ₽</p>
              <div className={styles.icons}>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card1__option1")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card1__option2")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card1__option3")}</p>
                </div>
                <div className={styles.item}>
                  <Link href={"/services/development"}>
                    <Button
                      variant="secondary"
                      className="text-[#fff] opacity-70 cursor-pointer hover:text-[#ca1e59] absolute bottom-3"
                    >
                      {t("card__button")} <ArrowRightToLine />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card__title}>{t("card2__title")}</h3>
              <p className={styles.card__description}>
                {t("card2__description")}
              </p>
              <p className={styles.card__price}>От 15 000 ₽</p>
              <div className={styles.icons}>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card2__option1")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card2__option2")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card2__option3")}</p>
                </div>
                <div className={styles.item}>
                  <Link href={"/services/assistents"}>
                    <Button
                      variant="secondary"
                      className="text-[#fff] opacity-70 cursor-pointer hover:text-[#ca1e59] absolute bottom-3"
                    >
                      {t("card__button")} <ArrowRightToLine />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card__title}>{t("card3__title")}</h3>
              <p className={styles.card__description}>
                {t("card3__description")}
              </p>
              <p className={styles.card__price}>От 45 000 ₽</p>
              <div className={styles.icons}>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card3__option3")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card3__option1")}</p>
                </div>
                <div className={styles.icon__item}>
                  <CircleCheck className={styles.icon} />
                  <p className="pl-3 opacity-50">{t("card3__option2")}</p>
                </div>
                <div className={styles.item}>
                  <Link href={"/services/cloud"}>
                    <Button
                      variant="secondary"
                      className="text-[#fff] opacity-70 cursor-pointer hover:text-[#ca1e59] absolute bottom-3"
                    >
                      {t("card__button")} <ArrowRightToLine />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
