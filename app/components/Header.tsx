"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Suvigya</Link>
          <div className="space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="#resume" className="hover:text-blue-600 transition-colors">Resume</Link>
            <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}