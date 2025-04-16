import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

// Стили
import "@/app/[locale]/globalStyles/normalize.css";
import "@/app/[locale]/globalStyles/globals.css";
// Компоненты
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
// Метадата
export const metadata: Metadata = {
  title: "Digital Agency Acsais",
  description: "Разаботка комплексных digital решений для бизнеса",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="body">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
