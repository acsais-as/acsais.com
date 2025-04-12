import { JSX } from "react";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.scss";
import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";
import Link from "next/link";

const Footer = (): JSX.Element => {
  const t = useTranslations("copyright");
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.header}>
          <Htag tag="h3">{t("about")}</Htag>
          <Ptag size="lead" className="mt-3 text-[#999999] opacity-70">
            {t("about__description")}
          </Ptag>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <Htag tag="h3">{t("company")}</Htag>
            <ul className="mt-3">
              <li className="text-left mt-1 opacity-70">
                <Link href="/about" className={styles.link}>
                  {t("company__about")}
                </Link>
              </li>
              <li className="text-left mt-1 opacity-70">
                <Link href="/contacts" className={styles.link}>
                  {t("company__contacts")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <Htag tag="h3">{t("services")}</Htag>
            <ul className="mt-3">
              <li className="text-left mt-1 opacity-70">
                <Link href="/services/development" className={styles.link}>
                  {t("dev")}
                </Link>
              </li>
              <li className="text-left mt-1 opacity-70">
                <Link href="/services/cloud" className={styles.link}>
                  {t("cloud")}
                </Link>
              </li>
              <li className="text-left mt-1 opacity-70">
                <Link href="/services/assistents" className={styles.link}>
                  {t("assistents")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <Htag tag="h3">{t("social")}</Htag>
            <ul className="mt-3">
              <li className="text-left mt-1 opacity-70">
                <Link
                  href="https://www.instagram.com/acsais.io"
                  target="_blank"
                  className={styles.link}
                >
                  {t("instagram")}
                </Link>
              </li>
              <li className="text-left mt-1 opacity-70">
                <Link
                  href="https://t.me/acsaisio"
                  target="_blank"
                  className={styles.link}
                >
                  {t("telegram")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
      <small className="pl-2 opacity-70">Acsais | {t("text")} </small>
    </div>
  );
};

export default Footer;
