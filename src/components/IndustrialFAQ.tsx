"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "WHAT IS THE MAXIMUM DRILLING DEPTH?",
    answer: "Our standard equipment can drill up to 10 meters using extension rods. For deeper requirements, we utilize heavy-duty hydraulic diamond systems."
  },
  {
    question: "COULD YOU PROVIDE CORE CUTTING IN GURUGRAM?",
    answer: "Yes, we are based in Gurugram and operate extensively across Delhi NCR, Rajasthan, and Haryana with 24/7 mobilization."
  },
  {
    question: "IS DIAMOND DRILLING VIBRATION-FREE?",
    answer: "Absolutely. Diamond core drilling is a non-percussive process, making it vibration-free and safe for critical structural reinforcement."
  },
  {
    question: "WHAT POWER SUPPLY IS REQUIRED ON SITE?",
    answer: "We carry our own silent generators if site power is unavailable. Standard equipment runs on 230V or 415V three-phase power."
  }
];

export default function IndustrialFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-8 bg-zinc-50 border-y-8 border-black/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
           <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            ANY<br /><span className="text-primary italic">QUESTIONS?</span>
           </h2>
           <div className="flex items-center gap-4 border-l-4 border-primary pl-8 py-4 bg-white border-2 border-black/10">
              <HelpCircle className="text-primary" size={32} />
              <p className="font-bold uppercase tracking-widest text-sm italic">04. Technical Support & Logistics</p>
           </div>
        </div>

        <div className="md:col-span-7 flex flex-col divide-y-4 divide-black/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between group"
              >
                <span className={`text-2xl md:text-4xl font-black text-left uppercase transition-colors ${activeIndex === i ? "text-primary" : "text-black"}`}>
                  {faq.question}
                </span>
                <div className={`p-2 border-2 border-black/10 transition-transform ${activeIndex === i ? "rotate-180 border-primary" : "rotate-0"}`}>
                  {activeIndex === i ? <Minus size={24} /> : <Plus size={24} />}
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
                    <p className="mt-8 text-xl font-bold uppercase tracking-tight text-black/60 leading-tight border-l-4 border-primary pl-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
