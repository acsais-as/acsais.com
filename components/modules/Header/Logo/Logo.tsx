import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LogoIcon from "@/public/icons/logo-icon.png";

const Logo = () => {
  const t = useTranslations("Header");
  return (
    <div className="flex items-center justify-between w-10 h-[90px]">
      <Image
        src={LogoIcon}
        alt={"Acsais Logo"}
        width={40}
        height={40}
        className="object-fill"
      />
      <Link
        className="font-[luxomona] relative inline-block text-3xl lg:text-4xl no-underline text-[#006262] dark:text-[#fff] pl-1 hover:animate-pulse"
        href="/"
      >
        {t("logo")}
        <span className="font-[luxomona] text-[#ca1e59] dark:text-[#ca1e59] ml-1 animate-ping">
          .
        </span>
      </Link>
    </div>
  );
};

export default Logo;
