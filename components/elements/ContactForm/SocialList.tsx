/* eslint-disable @next/next/no-img-element */
import styles from "./socialListContact.module.scss";

const SocialList = () => (
  <ul className={styles.social__list}>
    <li className={styles.social__list__item}>
      <a
        href="https://www.instagram.com/acsais.io"
        target="_blank"
        className={styles.social__list__item__link}
      >
        <span className={styles.social__list__item__link__text}>Instagram</span>
        <span
          className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__fb}`}
        >
          <img
            className={styles.social__list__item__link__img}
            src="/images/social/instagram.png"
            alt="telegram"
          />
        </span>
      </a>
    </li>
    <li className={styles.social__list__item}>
      <a
        href="https://t.me/acsaisio"
        target="_blank"
        className={styles.social__list__item__link}
      >
        <span className={styles.social__list__item__link__text}>Telegram</span>
        <span
          className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__yt}`}
        >
          <img
            className={styles.social__list__item__link__img}
            src="/images/social/telegram.png"
            alt="YouTube"
          />
        </span>
      </a>
    </li>
  </ul>
);

export default SocialList;
