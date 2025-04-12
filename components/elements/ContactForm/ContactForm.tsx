"use client";

import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import styles from "./contact.module.scss";
import ContactInput from "./ContactInput";
import { TextareaWithText } from "./TextArea";

const ContactForm = () => {
  const t = useTranslations("form");
  const [acceptWithRules, setAcceptWithRules] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current != null) {
      setSpinner(true);
      emailjs
        .sendForm(
          "service_rpk19pe",
          "template_wzpielo",
          formRef.current,
          "P5X8UTMoIn7ObuWrF"
        )
        .then(
          (result) => {
            setSpinner(false);
            toast(`{t("sending")} ${result.text}`);
          },
          (error) => {
            setSpinner(false);
            toast.error(`{t("sending")} ${error.text}`);
          }
        );
      formRef.current.reset();
      setAcceptWithRules(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
      <ContactInput
        text={t("full_name")}
        placeholder={t("full_name_text")}
        type="text"
        name="fullName"
      />
      <ContactInput
        text={t("specail")}
        placeholder={t("placeholder1")}
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder={t("placeholder2")}
        type="email"
        name="email"
      />
      <ContactInput
        text={t("phone")}
        placeholder={t("placeholder3")}
        type="tel"
        name="phone"
      />
      <TextareaWithText name="message" />
      <button className={styles.contact__form__btn} disabled={!acceptWithRules}>
        {spinner ? <PropagateLoader color="#fff" /> : t("button_send")}
      </button>
      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
        />
        <span className={styles.contact__checkbox__span} />
        <span className={styles.contact__checkbox__text}>
          {t("form_privacy")}{" "}
          <Link target="_blank" href="/privacy-policy" passHref legacyBehavior>
            <a className={styles.contact__checkbox__link}>{t("form_text")}</a>
          </Link>{" "}
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
