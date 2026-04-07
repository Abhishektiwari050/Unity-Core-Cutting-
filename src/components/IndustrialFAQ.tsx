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
    <section className="py-16 md:py-32 px-4 md:px-8 bg-zinc-50 border-y-8 border-black/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-5 w-full">
           <h2 className="text-3xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8 break-words text-black">
            ANY<br /><span className="text-primary italic">QUESTIONS?</span>
           </h2>
           <div className="flex items-center gap-4 border-l-4 border-primary pl-4 md:pl-8 py-4 bg-white border-2 border-black/10">
              <HelpCircle className="text-primary shrink-0" size={24} />
              <p className="font-bold uppercase tracking-widest text-[10px] md:text-sm italic text-black">04. Technical Support & Logistics</p>
           </div>
        </div>

        <div className="md:col-span-7 flex flex-col divide-y-4 divide-black/10 w-full overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6 md:py-8 w-full">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between group gap-4 min-w-0"
              >
                <span className={`flex-1 text-lg md:text-3xl font-black text-left uppercase transition-colors leading-tight break-words min-w-0 ${activeIndex === i ? "text-primary" : "text-black"}`}>
                  {faq.question}
                </span>
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
                    <p className="mt-6 md:mt-8 text-base md:text-xl font-bold uppercase tracking-tight text-black/60 leading-tight border-l-4 border-primary pl-4 md:pl-8 break-words">
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
