// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
});

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
