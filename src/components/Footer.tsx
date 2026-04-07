"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Star, Linkedin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-highest border-t-8 border-black text-black pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-8 overflow-hidden relative">
      {/* Heavy Branding Stripe */}
      <div className="absolute top-0 right-0 w-1/3 h-full swiss-diagonal opacity-10 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="bg-black p-2 border-b-4 border-r-4 border-black group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
              <Zap className="text-white fill-white" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-3xl md:text-4xl tracking-tighter leading-none">UNITY CORE</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-black uppercase">Precision / Strength</span>
            </div>
          </Link>
          <p className="font-bold text-lg leading-tight uppercase tracking-tighter max-w-sm">
            Setting the global benchmark for industrial precision in core cutting and diamond drilling infrastructure.
          </p>
          <div className="flex gap-4">
            {[
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaLinkedinIn, label: "LinkedIn" }
            ].map(({ icon: Icon, label }, i) => (
              <a 
                key={i} 
                href="#" 
                className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all group"
                aria-label={`Follow us on ${label}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8 px-0 md:px-4 border-l-0 md:border-l-4 border-black/10">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black tracking-widest text-primary mb-4 uppercase">Navigation</p>
            {["Home", "Services", "About", "FAQ", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="font-black text-xl hover:text-primary hover:translate-x-2 transition-all group flex items-center gap-2"
              >
                {item.toUpperCase()}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black tracking-widest text-primary mb-4 uppercase">Support</p>
            {["Legacy", "Privacy", "Terms", "Safety"].map((item) => (
              <Link key={item} href="#" className="font-black text-sm uppercase hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <p className="text-[10px] font-black tracking-widest text-primary uppercase">Headquarters</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary shrink-0" size={24} />
              <p className="font-bold text-lg uppercase leading-tight">
                Sector 18, Industrial Hub,<br />Gurugram, Rajasthan, India
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:+919871234567" className="flex items-center gap-3 font-black text-xl md:text-2xl hover:text-primary transition-colors break-words">
                <Phone size={20} className="text-primary" /> +91 9871 2345 67
              </a>
              <a href="mailto:info@unitycore.in" className="flex items-center gap-3 font-black text-xl md:text-2xl hover:text-primary transition-colors break-words">
                <Mail size={20} className="text-primary" /> INFO@UNITYCORE.IN
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute -bottom-12 -left-12 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black leading-none tracking-tighter">UNITY</h2>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1440px] mx-auto mt-32 pt-8 border-t-2 border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-[10px] tracking-widest uppercase">
          © {currentYear} UNITY CORE CUTTING — ALL RIGHTS RESERVED
        </p>
        <p className="font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
          MADE FOR <span className="bg-black text-white px-2 py-0.5">INDUSTRIAL EXCELLENCE</span>
        </p>
      </div>
    </footer>
  );
}
