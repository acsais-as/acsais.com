import { useTranslations } from "next-intl";
import styles from "./sectionFour.module.css";
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/elements/Tag/Tag";

// Logo Partners
import YCImage from "@/public/images/partners/yandex-cloud.png";
import BegetImage from "@/public/images/partners/beget.png";
import MDImage from "@/public/images/partners/moe-delo.png";

// Components

const SectionFour = () => {
  const t = useTranslations("section_four");
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.hero}>
          <Htag tag="h2">{t("title")}</Htag>
          <Ptag size="lead" className="ml-0">
            {t("description")}
          </Ptag>
        </div>
        <div className={styles.services}>
          <div className={styles.card}>
            <Htag tag="h2">Yandex Cloud</Htag>
            <Ptag className="mt-2 mb-2 text-center">{t("item_1")}</Ptag>
            <Link href="https://yandex.cloud/ru/prices" target="_blank">
              <Image alt="Yandex Cloud" width={194} height={62} src={YCImage} />
            </Link>
          </div>
          <div className={styles.card}>
            <Htag tag="h2">Beget</Htag>
            <Ptag className="mt-2 mb-2 text-center">{t("item_2")}</Ptag>
            <Link href="beget.com/p979482" target="_blank">
              <Image alt="Beget" width={194} height={62} src={BegetImage} />
            </Link>
          </div>
          <div className={styles.card}>
            <Htag tag="h2">Мoe Delo</Htag>
            <Ptag className="mt-2 mb-2 text-center">{t("item_3")}</Ptag>
            <Link href="beget.com/p979482" target="_blank">
              <Image alt="Beget" width={194} height={62} src={MDImage} />
            </Link>
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
      </div>
    </section>
  );
};

export default SectionFour;
