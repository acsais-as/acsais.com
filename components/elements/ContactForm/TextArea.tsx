import styles from "./contact.module.scss";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

interface IContactInput {
  name: string;
}

export function TextareaWithText({ name }: IContactInput) {
  const m = useTranslations("form");
  return (
    <div className="grid w-full gap-1.5">
      <Label className={styles.contact__form__label__text} htmlFor="message-2">
        Тема
      </Label>
      <Textarea
        className={styles.contact__form__label__input}
        placeholder={m("placeholder4")}
        id="message-2"
        name={name}
      />
      <p className={styles.contact__form__label__text}>{m("after_text")}</p>
    </div>
  );
}
