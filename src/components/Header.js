'use client'

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav className="fixed top-0 left-0 w-full z-50 bg-white">
    <div className="container flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MenuIcon />
        </button>
        <Link href={"/"} className="text-2xl">Nomena R.</Link>
      </div>

      <ul className="hidden md:flex items-center space-x-4">
        <li>
          <Link href="#home" className="flex items-center space-x-2 px-3 py-2 hover:text-gray-500">
            <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#skills" className="px-3 py-2 hover:text-gray-500">
            My Skills
          </Link>
        </li>
        <li>
          <Link href="#timeline" className="px-3 py-2 hover:text-gray-500">
            Timeline
          </Link>
        </li>
        <li>
          <Link href="#projects" className="px-3 py-2 hover:text-gray-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact-me" className="px-3 py-2 hover:text-gray-500">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>

    {isOpen && (
      <ul className={cn("md:hidden absolute top-full left-0 w-full py-4 bg-white border-b")}>
        <li>
          <Link href="#home" className="flex items-center space-x-2  px-3 py-2 hover:text-gray-500">
            <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href={"#skills"} className="block px-3 py-2 hover:text-gray-500">
            My Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="block px-3 py-2 hover:text-gray-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact-me" className="block px-3 py-2 hover:text-gray-500">
            Contact Me
          </Link>
        </li>
      </ul>
    )}
  </nav>
}
