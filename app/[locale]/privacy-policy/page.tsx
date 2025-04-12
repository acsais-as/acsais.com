import Head from "next/head";
import { routing } from "@/i18n/routing";
// Метадата
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Политика конфиденциальности | Digital Agency Acsais",
  description: "Политика конфиденциальности компании АКСАИС",
};
import PolicyContent from "@/components/PolicyContent/PolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <PolicyContent />
      </main>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
