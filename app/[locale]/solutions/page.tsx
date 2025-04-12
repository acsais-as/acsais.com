import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./solutions.module.css";

const Solutions = () => {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.section}>
      <h1>{t("title")}</h1>
      Solutions
    </div>
  );
};

export default Solutions;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
