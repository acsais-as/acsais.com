import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NavMenu = () => {
  const t = useTranslations("Header");
  return (
    <ul className="hidden lg:flex items-center gap-4 md:gap-2 lg:gap-2 rounded-full">
      <li>
        <Link
          href="/"
          className="inline-block text-lg no-underline text-[#fff] text-opacity-7 dark:text-white dark:opacity-70 pointer group transition duration-300"
        >
          {t("home")}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2ddad7]"></span>
        </Link>
      </li>
      <li className="m-4">
        <Link
          href="/about"
          className="inline-block text-lg no-underline text-[#fff] text-opacity-7 dark:text-white dark:opacity-70 pointer group transition duration-300"
        >
          {t("about")}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2ddad7]"></span>
        </Link>
      </li>
      <li className="m-4">
        <Link
          href="/services"
          className="inline-block text-lg no-underline text-[#fff] text-opacity-7 dark:text-white dark:opacity-70 pointer group transition duration-300"
        >
          {t("services")}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2ddad7]"></span>
        </Link>
      </li>
      <li className="m-4">
        <Link
          href="/contacts"
          className="inline-block text-lg no-underline text-[#fff] text-opacity-7 dark:text-white dark:opacity-70 pointer group transition duration-300"
        >
          {t("contacts")}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2ddad7]"></span>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
