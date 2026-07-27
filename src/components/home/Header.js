'use client'

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { HomeIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { LanguageDropdown } from "../common";

const NAV_ITEMS = ["home", "skills", "timeline", "projects", "contact-me"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = useTranslations('header');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = NAV_ITEMS
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `px-3 py-2 hover:text-secondary ${activeSection === id ? "text-secondary font-semibold" : ""}`;

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
          <Link href="#home" className={`flex items-center space-x-2 ${linkClass("home")}`}>
            <HomeIcon className="w-5 h-5" />
            <span>{t('home')}</span>
          </Link>
        </li>
        <li>
          <Link href="#skills" className={linkClass("skills")}>
            {t('skills')}
          </Link>
        </li>
        <li>
          <Link href="#timeline" className={linkClass("timeline")}>
            {t('timeline')}
          </Link>
        </li>
        <li>
          <Link href="#projects" className={linkClass("projects")}>
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link href="#contact-me" className={linkClass("contact-me")}>
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
            <Link href="#home" className={`flex items-center space-x-2 ${linkClass("home")}`}>
              <HomeIcon className="w-5 h-5" />
              <span>{t('home')}</span>
            </Link>
          </li>
          <li>
            <Link href={"#skills"} className={`block ${linkClass("skills")}`}>
              {t('skills')}
            </Link>
          </li>
          <li>
            <Link href={"#timeline"} className={`block ${linkClass("timeline")}`}>
              {t('timeline')}
            </Link>
          </li>
          <li>
            <Link href="#projects" className={`block ${linkClass("projects")}`}>
              {t('projects')}
            </Link>
          </li>
          <li>
            <Link href="#contact-me" className={`block ${linkClass("contact-me")}`}>
              {t('contactMe')}
            </Link>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  </nav>
}
