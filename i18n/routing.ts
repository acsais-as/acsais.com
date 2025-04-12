import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "zh", "ar"],
  defaultLocale: "ru",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    "/": {
      en: "/",
      ru: "/",
      zh: "/",
      ar: "/",
    },
    "/about": {
      en: "/about",
      ru: "/about",
      zh: "/about",
      ar: "/about",
    },
    "/solutions": {
      en: "/solutions",
      ru: "/solutions",
      zh: "/solutions",
      ar: "/solutions",
    },
    "/blog": {
      en: "/blog",
      ru: "/blog",
      zh: "/blog",
      ar: "/blog",
    },
    "/contacts": {
      en: "/contacts",
      ru: "/contacts",
      zh: "/contacts",
      ar: "/contacts",
    },
    "/services": {
      en: "/services",
      ru: "/services",
      zh: "/services",
      ar: "/services",
    },
    "/services/development": {
      en: "/services/development",
      ru: "/services/development",
      zh: "/services/development",
      ar: "/services/development",
    },
    "/services/cloud": {
      en: "/services/cloud",
      ru: "/services/cloud",
      zh: "/services/cloud",
      ar: "/services/cloud",
    },
    "/services/assistents": {
      en: "/services/assistents",
      ru: "/services/assistents",
      zh: "/services/assistents",
      ar: "/services/assistents",
    },
    "/investor": {
      en: "/investor",
      ru: "/investor",
      zh: "/investor",
      ar: "/investor",
    },

    // If some locales use different paths, you can
    // specify the relevant external pathnames
    // "/about": {
    //   ru: "/about",
    // },

    // Dynamic params are supported via square brackets
    // "/news/[articleSlug]": {
    //   de: "/neuigkeiten/[articleSlug]",
    // },

    // Static pathnames that overlap with dynamic segments
    // will be prioritized over the dynamic segment
    // "/news/just-in": {
    //   de: "/neuigkeiten/aktuell",
    // },

    // Also (optional) catch-all segments are supported
    // "/categories/[...slug]": {
    //   de: "/kategorien/[...slug]",
    // },
  },
  localeDetection: true,
});
