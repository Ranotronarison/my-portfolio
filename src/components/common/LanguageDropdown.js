import { Button } from "../ui/button"
import { GlobeIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link } from "@/navigation";
import { GB, FR } from 'country-flag-icons/react/3x2'
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export const LanguageDropdown = () => {
  const t = useTranslations('header');
  const locale = useLocale()
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <GlobeIcon className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-gray-100">
            <Link href="/" locale="en" className={cn("flex items-center space-x-2 w-full text-gray-500", locale === "en" && "text-primary font-semibold")}>
              <GB className="w-5 h-5 mr-2 rounded-full" /> {t('english')}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100">
            <Link href="/" locale="fr" className={cn("flex items-center space-x-2 w-full text-gray-500", locale === "fr" && "text-primary font-semibold")}>
              <FR className="w-5 h-5 mr-2 rounded-full" /> {t('french')}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}