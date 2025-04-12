import MainTitle from "@/components/elements/MainTitle/MainTitle";

import ArrowSvg from "@/public/images/hero-arrow.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";
import SocialList from "./SocialList";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import styles from "./contact.module.scss";

const Contact = () => {
  const m = useTranslations("form");

  return (
    <section className={styles.contact} id="contact">
      <div>
        <MainTitle text={m("form__title")} />
      </div>
      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>{m("form__description")}</p>

            <>
              <h3 className={styles.contact__title}>
                <span className={styles.contact__title__text}>
                  {m("social")}
                </span>
                <span className={styles.contact__title__arrow}>
                  <Image
                    src={ArrowSvg}
                    width={57}
                    height={76}
                    alt="Arrow"
                    priority
                  />
                </span>
                <span className={styles.contact__title__border} />
              </h3>
              <SocialList />
            </>
          </div>
          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
