"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Options from "./Option/Options";

import styles from "./MobileNav.module.css";
import { ArrowDownRight } from "lucide-react";

export default function Header() {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false);

  // Функция открытия меню
  const handleToggleMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.toggle(
      "overflow-hidden"
    );
    setMenuOpen(!menuOpen);
  };

  // Функция для закрытия меню
  const closeMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.remove(
      "overflow-hidden"
    );
    setMenuOpen(false);
  };

  return (
    <header className="w-full h-[90px] fixed px-1 md:px-5 lg:px-7 xl:px-[9%] flex items-center justify-between z-50">
      <Logo />
      <nav className="hidden lg:flex items-center gap-3 px-10">
        <NavMenu />
      </nav>
      <div className="flex items-center gap-1 px-5">
        <Options />
        <button
          onClick={handleToggleMenu}
          className={`${styles.burger__menu} ${menuOpen ? styles.open : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <ul className={`${styles.menu} ${menuOpen ? styles.open : styles.close}`}>
        <li className={styles.header__nav__list__item}>
          <Link
            href="/"
            className="text-3xl font-[Fira Sans ExtraLight] inline-block no-underline text-[#4c5866] pointer active:bg-blue-600"
            onClick={closeMenu}
          >
            {t("home")}
          </Link>
          <ArrowDownRight className="text-[#4c5866]" />
        </li>
        <li className={styles.header__nav__list__item}>
          <Link
            href="/about"
            className="text-3xl font-[Fira Sans ExtraLight] inline-block no-underline text-[#4c5866] pointer active:bg-blue-600"
            onClick={closeMenu}
          >
            {t("about")}
          </Link>
          <ArrowDownRight className="text-[#4c5866]" />
        </li>
        {/* <li className={styles.header__nav__list__item}>
          <Link
            href="/solutions"
            className="text-4xl font-[Fira Sans ExtraLight] inline-block no-underline text-white opacity-70 pointer mb-3"
            onClick={closeMenu}
          >
            {t("solutions")}
          </Link>
        </li>
        <li className={styles.header__nav__list__item}>
          <Link
            href="/blog"
            className="text-4xl font-[Fira Sans ExtraLight] inline-block no-underline text-white opacity-70 pointer mb-3"
            onClick={closeMenu}
          >
            {t("blog")}
          </Link>
        </li> */}
        <li className={styles.header__nav__list__item}>
          <Link
            href="/contacts"
            className="text-3xl font-[Fira Sans ExtraLight] inline-block no-underline text-[#4c5866] pointer"
            onClick={closeMenu}
          >
            {t("contacts")}
          </Link>
          <ArrowDownRight className="text-[#4c5866]" />
        </li>
      </ul>
    </header>
  );
}
