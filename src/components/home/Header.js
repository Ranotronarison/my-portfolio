'use client'

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { HomeIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
    <div className="container flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MenuIcon />
        </button>
        <Link href={"/"} className="text-2xl">Nomena R.</Link>
      </div>

      <ul className="hidden md:flex items-center space-x-4">
        <li>
          <Link href="#home" className="flex items-center space-x-2 px-3 py-2 hover:text-secondary">
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#skills" className="px-3 py-2 hover:text-secondary">
            My Skills
          </Link>
        </li>
        <li>
          <Link href="#timeline" className="px-3 py-2 hover:text-secondary">
            Timeline
          </Link>
        </li>
        <li>
          <Link href="#projects" className="px-3 py-2 hover:text-secondary">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact-me" className="px-3 py-2 hover:text-secondary">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>

    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="md:hidden">
      <CollapsibleContent className="transition-all duration-300 ease-in-out">
        <ul>
          <li>
            <Link href="#home" className="flex items-center space-x-2 px-3 py-2 hover:text-secondary">
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={"#skills"} className="block px-3 py-2 hover:text-secondary">
              My Skills
            </Link>
          </li>
          <li>
            <Link href={"#timeline"} className="block px-3 py-2 hover:text-secondary">
              Timeline
            </Link>
          </li>
          <li>
            <Link href="#projects" className="block px-3 py-2 hover:text-secondary">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact-me" className="block px-3 py-2 hover:text-secondary">
              Contact Me
            </Link>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  </nav>
}
