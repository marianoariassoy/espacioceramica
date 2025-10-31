import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],

  defaultLocale: "es",
  localePrefix: "always",

  // pathnames: {
  // // If all locales use the same pathname, a single
  // // external path can be used for all locales
  // '/': '/',
  // '/blog': '/blog',

  // // If locales use different paths, you can
  // // specify the relevant external pathnames
  // '/services': {
  //   de: '/leistungen'
  // },

  // // Encoding of non-ASCII characters is handled
  // // automatically where relevant
  // '/about': {
  //   de: '/über-uns'
  // },

  // // Dynamic params are supported via square brackets
  // '/news/[articleSlug]': {
  //   de: '/neuigkeiten/[articleSlug]'
  // },

  // // Static pathnames that overlap with dynamic segments
  // // will be prioritized over the dynamic segment
  // '/news/just-in': {
  //   de: '/neuigkeiten/aktuell'
  // },

  // // Also (optional) catch-all segments are supported
  // '/categories/[...slug]': {
  //   de: '/kategorien/[...slug]'
  // }
  // }
});
