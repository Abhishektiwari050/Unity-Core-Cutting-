"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Technical",
    question: "WHAT IS THE MAXIMUM DRILLING DEPTH?",
    answer: "Our standard equipment can drill up to 10 meters using extension rods. For deeper requirements, we utilize heavy-duty hydraulic diamond systems."
  },
  {
    category: "Logistics",
    question: "DO YOU PROVIDE SERVICES OUTSIDE DELHI NCR?",
    answer: "Yes, we operate pan-India for major industrial projects, with primary focus on Delhi NCR, Rajasthan, and Haryana."
  },
  {
    category: "Safety",
    question: "IS DIAMOND DRILLING VIBRATION-FREE?",
    answer: "Absolutely. Diamond core drilling is a non-percussive process, making it vibration-free and safe for critical structural reinforcement."
  },
  {
    category: "Power",
    question: "WHAT POWER SUPPLY IS REQUIRED ON SITE?",
    answer: "We carry our own silent generators if site power is unavailable. Standard equipment runs on 230V or 415V three-phase power."
  },
  {
    category: "Cost",
    question: "HOW DO YOU CALCULATE CORE DRILLING CHARGES?",
    answer: "Pricing is based on diameter, depth, reinforcement density, and site accessibility. We provide transparent, itemized quotes."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="px-4 md:px-8 pt-28 pb-12 border-b-8 border-black swiss-grid-pattern relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-24 items-start relative z-10 w-full overflow-hidden">
          <div className="lg:col-span-8 lg:pr-24 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-black text-white px-4 py-1 font-black text-xs md:text-xl mb-6 uppercase"
            >
              03. KNOWLEDGE BASE
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-text-clamp text-black break-words"
            >
              TECHNICAL<br/>
              <span className="text-primary italic">/ FAQ & /</span><br/>
              RESOURCES.
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] w-full">
              <h3 className="font-black text-xl md:text-2xl mb-4 uppercase leading-none">Need Direct Help?</h3>
              <p className="font-bold text-sm md:text-lg uppercase opacity-60 mb-6 leading-tight">Our technical engineers are available for site visits and consultations.</p>
              <Link 
                href="/contact"
                className="flex items-center justify-between bg-black text-white p-4 font-black text-sm uppercase hover:bg-primary transition-colors"
              >
                Connect Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="px-4 md:px-8 py-16 md:py-32 max-w-[1440px] mx-auto overflow-hidden w-full">
        <div className="w-full flex flex-col divide-y-4 divide-black/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6 md:py-10 w-full overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between group gap-4 min-w-0"
              >
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-[10px] md:text-xs font-black text-primary tracking-widest uppercase mb-2">{faq.category}</span>
                  <span className={`text-lg md:text-4xl font-black text-left uppercase transition-colors leading-tight break-words min-w-0 ${activeIndex === i ? "text-primary" : "text-black"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-2 border-2 border-black/10 transition-transform shrink-0 ${activeIndex === i ? "rotate-180 border-primary bg-primary text-white" : "rotate-0 text-black"}`}>
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-8 text-base md:text-2xl font-bold uppercase tracking-tight text-black/60 leading-tight border-l-4 border-primary pl-4 md:pl-12 break-words max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Quick Links */}
      <section className="px-4 md:px-8 pb-32 max-w-[1440px] mx-auto overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black w-full overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,48,0,0.1)]">
          {[
            { icon: <Phone size={32} />, label: "Call Center", val: "+91 9871 2345 67" },
            { icon: <Mail size={32} />, label: "Technical Support", val: "info@unitycore.in" },
            { icon: <MessageSquare size={32} />, label: "WhatsApp Desk", val: "+91 9871 2345 67" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border-b-4 md:border-b-0 md:border-r-4 last:border-0 border-black flex flex-col items-center text-center group hover:bg-black transition-all">
              <div className="text-primary group-hover:scale-110 transition-transform mb-4">{item.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 mb-2">{item.label}</span>
              <span className="text-lg md:text-xl font-black uppercase text-black group-hover:text-white break-all">{item.val}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
