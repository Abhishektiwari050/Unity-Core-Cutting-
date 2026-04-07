"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-3 md:py-4",
        scrolled ? "bg-white border-b-2 border-black py-2 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="bg-primary p-1.5 border-b-4 border-r-4 border-black group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl md:text-2xl tracking-tighter leading-none text-black">UNITY CORE</span>
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-primary leading-none">PRCSN / CUTTING</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-6 py-2 font-black text-xs tracking-[0.2em] transition-all hover:bg-primary hover:text-white",
                pathname === link.href ? "bg-black text-white" : "text-black"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+91800UNITYCORE"
            className="flex items-center gap-2 bg-primary text-white px-6 py-2 font-black text-xs tracking-widest border-b-4 border-r-4 border-black active:translate-x-1 active:translate-y-1 transition-all"
          >
            <Phone size={14} />
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-8 md:mb-16">
               <span className="font-black text-xl md:text-2xl tracking-tighter text-black">UNITY CORE</span>
               <button 
                onClick={() => setIsOpen(false)} 
                className="text-black p-2 bg-zinc-100 rounded-full"
                aria-label="Close menu"
               >
                 <X size={24} />
               </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black hover:text-primary transition-colors leading-none"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
            <div className="mt-auto border-t-4 border-black pt-8">
              <p className="font-bold text-xs tracking-widest text-primary mb-4 uppercase">Direct Project Line</p>
              <a href="tel:+91800UNITYCORE" className="text-4xl font-black text-black">+91 9871 2345 67</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
