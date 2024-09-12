'use client'

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { HomeIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { LanguageDropdown } from "../common/LanguageDropdown";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
    <div className="container flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MenuIcon />
        </button>
        <Link href={"/"} className="text-2xl"><Image src={"images/logo.svg"} alt="logo" width={35} height={35} className="w-10 h-10" /></Link>
      </div>

      <ul className="hidden md:flex items-center space-x-4">
        <li>
          <Link href="#home" className="flex items-center space-x-2 px-3 py-2 hover:text-secondary">
            <HomeIcon className="w-5 h-5" />
            <span>{t('home')}</span>
          </Link>
        </li>
        <li>
          <Link href="#skills" className="px-3 py-2 hover:text-secondary">
            {t('skills')}
          </Link>
        </li>
        <li>
          <Link href="#timeline" className="px-3 py-2 hover:text-secondary">
            {t('timeline')}
          </Link>
        </li>
        <li>
          <Link href="#projects" className="px-3 py-2 hover:text-secondary">
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link href="#contact-me" className="px-3 py-2 hover:text-secondary">
            {t('contactMe')}
          </Link>
        </li>
        <LanguageDropdown />
      </ul>
    </div>

    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:hidden">
      <CollapsibleContent className="transition-all duration-300 ease-in-out">
        <ul>
          <li>
            <Link href="#home" className="flex items-center space-x-2 px-3 py-2 hover:text-secondary">
              <HomeIcon className="w-5 h-5" />
              <span>{t('home')}</span>
            </Link>
          </li>
          <li>
            <Link href={"#skills"} className="block px-3 py-2 hover:text-secondary">
              {t('skills')}
            </Link>
          </li>
          <li>
            <Link href={"#timeline"} className="block px-3 py-2 hover:text-secondary">
              {t('timeline')}
            </Link>
          </li>
          <li>
            <Link href="#projects" className="block px-3 py-2 hover:text-secondary">
              {t('projects')}
            </Link>
          </li>
          <li>
            <Link href="#contact-me" className="block px-3 py-2 hover:text-secondary">
              {t('contactMe')}
            </Link>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  </nav>
}
