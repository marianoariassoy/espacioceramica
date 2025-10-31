import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const page = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <nav className="flex gap-2 items-center">
      <Link
        href={pathname}
        locale="es"
        className={
          locale === "es" ? "opacity-100 " : "opacity-50 hover:opacity-100"
        }
      >
        Esp
      </Link>
      <span>|</span>
      <Link
        href={pathname}
        locale="en"
        className={
          locale === "en" ? "opacity-100 " : "opacity-50 hover:opacity-100"
        }
      >
        Eng
      </Link>
    </nav>
  );
};

export default page;
