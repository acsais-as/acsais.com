import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./blog.module.css";

const Blog = () => {
  const t = useTranslations("Header");
  return (
    <div className={styles.section}>
      <h1>{t("logo")}</h1>
      Blog
    </div>
  );
};

export default Blog;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
