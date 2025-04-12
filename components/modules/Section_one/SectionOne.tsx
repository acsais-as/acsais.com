import { useTranslations } from "next-intl";
import styles from "./sectionOne.module.css";
// Components
import HeroImage from "./HeroImg";
import { Tag } from "@/components/elements/Tag/Tag";
import Button from "@/components/elements/Button/Button";
import { RiArrowDownSLine } from "react-icons/ri";
import Ptag from "@/components/elements/Ptag/Ptag";
import ListIcons from "@/components/elements/ListIcons/ListIcons";

const SectionOne = () => {
  const t = useTranslations("section_one");
  return (
    <section className="w-full h-[100vh] flex items-center justify-between z-1 mt-20">
      <div className={styles.section__container}>
        <div className={styles.left}>
          <div className={styles.badges}>
            <Tag size="m" color="ghost">
              {t("badge-1")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-2")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-3")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-4")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-5")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-6")}
            </Tag>
            <Tag size="m" color="ghost">
              {t("badge-7")}
            </Tag>
          </div>
          <div className={styles.hero}>
            <Ptag size="lead">{t("description")}</Ptag>
            <h1 className={styles.hero__title}>
              Digital <br /> Agency Acsais
            </h1>
            <ListIcons>{t("check1")}</ListIcons>
            <ListIcons>{t("check2")}</ListIcons>
            <ListIcons>{t("check3")}</ListIcons>
            <ListIcons>{t("check4")}</ListIcons>
            <div className="flex items-center justify-start mt-7">
              <div className="flex flex-col gap-y-3 md:flex">
                <Button appearance={"primary"} href="/services">
                  {t("button1")}
                </Button>
              </div>
              <div>
                <Button appearance={"link"} href="/investor">
                  {t("button2")}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.badge}>{t("badge1")}</div>
          <div className={styles.badge2}>{t("badge2")}</div>
          <div className={styles.badge3}>{t("badge3")}</div>
          <div className={styles.badge4}>{t("badge4")}</div>
          <div className={styles.badge5}>{t("badge5")}</div>
          <div className={styles.badge6}>{t("badge6")}</div>
          <HeroImage />
        </div>
      </div>

      <div className="hidden md:flex absolute left-2/4 bottom-1 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-[#ca1e59]" />
      </div>
    </section>
  );
};

export default SectionOne;
