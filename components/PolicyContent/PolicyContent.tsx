import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./PolicyContent.module.css";

import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";

const PolicyContent = () => {
  const t = useTranslations("privacy");
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <Htag tag="h1">{t("privacy__title")}</Htag>
        <Ptag size="lead">{t("privacy__description")}</Ptag>
        <Htag tag="h2">{t("termins")}</Htag>
        <Ptag size="lead">{t("termins_p")}</Ptag>
        <Ptag size="lead">a) {t("item1")}</Ptag>
        <Ptag size="lead">b) {t("item2")}</Ptag>
        <Ptag size="lead">c) {t("item3")}</Ptag>
        <Ptag size="lead">d) {t("item4")}</Ptag>
        <Ptag size="lead">e) {t("item5")}</Ptag>
        <Ptag size="lead">f) {t("item6")}</Ptag>
        <Ptag size="lead">g) {t("item7")}</Ptag>
        <Htag tag="h2">2. {t("item8")}</Htag>
        <Ptag size="lead">2.1. {t("item9")}</Ptag>
        <Ptag size="lead">2.2. {t("item10")}</Ptag>
        <Htag tag="h2">. {t("item11")}</Htag>
        <Ptag size="lead">3.1. {t("item12")}</Ptag>
        <ul>
          <li>
            <Ptag size="lead">{t("item13")}</Ptag>
          </li>
          <li>
            <Ptag size="lead">{t("item14")}</Ptag>
          </li>
          <li>
            <Ptag size="lead">{t("item15")}</Ptag>
          </li>
        </ul>
        <Ptag size="lead">{t("item16")}</Ptag>

        <Ptag size="lead">3.2. {t("item17")}</Ptag>
        <Ptag size="lead">a) {t("item18")}</Ptag>
        <Ptag size="lead">b) {t("item19")}</Ptag>
        <Ptag size="lead">c) {t("item20")}</Ptag>
        <Htag tag="h2">4. {t("item21")}</Htag>
        <Ptag size="lead">4.1 {t("item22")}</Ptag>
        <Ptag size="lead">4.2. {t("item23")}</Ptag>
        <Ptag size="lead">4.3. {t("item24")}</Ptag>
        <Ptag size="lead">4.4. {t("item25")}</Ptag>
        <Ptag size="lead">4.5. {t("item26")}</Ptag>
        <Ptag size="lead">4.6. {t("item27")}</Ptag>
        <Ptag size="lead">4.7. {t("item28")}</Ptag>
        <Ptag size="lead">4.8. {t("item29")}</Ptag>
        <Ptag size="lead">4.9. {t("item30")}</Ptag>
        <Ptag size="lead">a) {t("item31")}</Ptag>
        <Ptag size="lead">b) {t("item32")}</Ptag>
        <Ptag size="lead">в) {t("item33")}</Ptag>
        <Ptag size="lead">c) {t("item34")}</Ptag>
        <Ptag size="lead">d) {t("item35")}</Ptag>
        <Ptag size="lead">e) {t("item36")}</Ptag>
        <Htag tag="h2">5. {t("item37")}</Htag>
        <Ptag size="lead">5.1. {t("item38")}</Ptag>
        <Ptag size="lead">5.2. {t("item39")}</Ptag>
        <Ptag size="lead">5.3. {t("item40")}</Ptag>
        <Htag tag="h2">6. {t("item41")}</Htag>
        <Ptag size="lead">{t("item42")}</Ptag>
        <Ptag size="lead">6.1. {t("item43")}</Ptag>
        <Ptag size="lead">6.2. {t("item44")}</Ptag>
        <Ptag size="lead">6.3. {t("item45")}</Ptag>
        <Ptag size="lead">6.4. {t("item46")}</Ptag>
        <Ptag size="lead">a) {t("item47")}</Ptag>
        <Ptag size="lead">b) {t("item48")}</Ptag>
        <Ptag size="lead">c) {t("item49")}</Ptag>
        <Ptag size="lead">d) {t("item50")}</Ptag>
        <Ptag size="lead">д) {t("item51")}</Ptag>
        <Ptag size="lead">e) {t("item52")}</Ptag>
        <Ptag size="lead">f) {t("item53")}</Ptag>
        <Ptag size="lead">g) {t("item54")}</Ptag>
        <Ptag size="lead">k) {t("item55")}</Ptag>
        <Ptag size="lead">l) {t("item56")}</Ptag>
        <Ptag size="lead">m) {t("item57")}</Ptag>
        <Ptag size="lead">n) {t("item58")}</Ptag>
        <Ptag size="lead">6.5. {t("item59")}</Ptag>
        <Ptag size="lead">a) {t("item60")}</Ptag>
        <Ptag size="lead">b) {t("item61")}</Ptag>
        <Ptag size="lead">c) {t("item62")}</Ptag>
        <Ptag size="lead">d) {t("item63")}</Ptag>
        <Htag tag="h2">7. {t("item64")}</Htag>
        <Ptag size="lead">7.1. {t("item65")}</Ptag>
        <Ptag size="lead">a) {t("item66")}</Ptag>
        <Ptag size="lead">b) {t("item67")}</Ptag>
        <Ptag size="lead">c) {t("item68")}</Ptag>
        <Ptag size="lead">d) {t("item69")}</Ptag>
        <Ptag size="lead">7.2. {t("item70")}</Ptag>
        <Ptag size="lead">7.3. {t("item71")}</Ptag>
        <Ptag size="lead">7.4. {t("item72")}</Ptag>
        <Ptag size="lead">7.5. {t("item73")}</Ptag>
        <Htag tag="h2">8. {t("item74")}</Htag>
        <Ptag size="lead">8.1. {t("item75")}</Ptag>
        <Ptag size="lead">8.2. {t("item76")}</Ptag>
        <Ptag size="lead">8.3. {t("item77")}</Ptag>
        <Ptag size="lead">a) {t("item78")}</Ptag>
        <Ptag size="lead">b) {t("item79")}</Ptag>
        <Ptag size="lead">8.4. {t("item80")}</Ptag>
        <Ptag size="lead">8.5. {t("item81")}</Ptag>
        <Ptag size="lead">8.6. {t("item82")}</Ptag>
        <Ptag size="lead">8.7. {t("item83")}</Ptag>
        <Ptag size="lead">a) {t("item84")}</Ptag>
        <Ptag size="lead">b) {t("item85")}</Ptag>
        <Htag tag="h2">9. {t("item86")}</Htag>
        <Ptag size="lead">9.1. {t("item87")}</Ptag>
        <Ptag size="lead">
          9.2. {t("item88")}{" "}
          <a href="https://acsais.com/ru/privacy">
            https://acsais.com/ru/privacy
          </a>
        </Ptag>
        <Htag tag="h2">10. {t("item89")}</Htag>
        <Ptag size="lead">10.1. {t("item90")}</Ptag>
        <Ptag size="lead">10.2. {t("item91")}</Ptag>
        <Ptag size="lead">10.3. {t("item92")}</Ptag>
        <Htag tag="h2">11. {t("item93")}</Htag>
        <Ptag size="lead">11.1. {t("item94")}</Ptag>
        <Ptag size="lead">11.2. {t("item95")}</Ptag>
        <Ptag size="lead">a) {t("item96")}</Ptag>
        <Ptag size="lead">b) {t("item97")}</Ptag>
        <Ptag size="lead">11.2. {t("item98")}</Ptag>
        <Htag tag="h2">12. {t("item99")}</Htag>
        <Ptag size="lead">12.1. {t("item100")}</Ptag>
        <Ptag size="lead">12.2. {t("item101")}</Ptag>
        <Ptag size="lead">12.3. {t("item102")}</Ptag>
        <Ptag size="lead">12.4. {t("item103")}</Ptag>
        <Htag tag="h2">13. {t("item104")}</Htag>
        <Ptag size="lead">13.1. {t("item105")}</Ptag>
        <Ptag size="lead">{t("item106")}</Ptag>
      </div>
    </div>
  );
};

export default PolicyContent;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
