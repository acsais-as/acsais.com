import { routing } from "@/i18n/routing";
// import { useTranslations } from "next-intl";
import styles from "./contacts.module.css";

// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Контакты | Digital Agency Acsais",
  description: "Контакты компании АКСАИС",
};

import Htag from "@/components/elements/Htag/Htag";
import Ptag from "@/components/elements/Ptag/Ptag";

const Contacts = () => {
  // const t = useTranslations("Header");
  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <Htag tag="h1">Организация</Htag>
        <Ptag>ООО «АКСАИС»</Ptag>
        <span className={styles.content__descriptor}></span>
        <div className={styles.content__text_box}>
          <Ptag size="lead" className={styles.content__text}>
            Дата регистрации: 13.10.2021 <br />
            ОГРН: 1217700488631 <br />
            ИНН: 9701186712 <br />
            КПП: 770101001 <br />
            ОКПО: 51803137
          </Ptag>
          <Ptag size="lead" className={styles.content__text}>
            Банк: АО АЛЬФА-БАНК <br />
            Расчетный счет: 40702810702680004745
            <br /> Корреспондентский счет: 30101810200000000593 <br />
            БИК Банка: 044525593
          </Ptag>
          <Ptag size="lead" className={styles.content__text}>
            Почта для связи: acsais-com@yandex.ru
          </Ptag>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
