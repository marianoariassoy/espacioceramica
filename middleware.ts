import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/i18n/navigation";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
