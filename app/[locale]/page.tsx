import { routing } from "@/i18n/routing";
import "@/app/[locale]/globalStyles/globals.css";
import SectionOne from "@/components/modules/Section_one/SectionOne";
import SectionTwo from "@/components/modules/Section_two/SectionTwo";
import SectionThree from "@/components/modules/Section_three/SectionThree";
import SectionFour from "@/components/modules/Section_four/SectionFour";

export default function HomePage() {
  return (
    <div className="container">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
