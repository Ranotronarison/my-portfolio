import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { localeConfig } from "./config/locale.config";

const { locales } = localeConfig

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })