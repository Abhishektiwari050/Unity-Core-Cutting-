"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "WHAT ARE THE PRIMARY CORE CUTTING NEEDS YOU SERVICE?",
    answer: "We specialize in precision circular penetration for plumbing, HVAC, and electrical conduits. We also handle large-scale slab cutting, wall sawing, and controlled demolition for industrial and residential projects."
  },
  {
    id: "02",
    question: "DO YOU OPERATE BEYOND UTTAM NAGAR?",
    answer: "Yes, we provide full coverage across Delhi NCR, including Gurugram, Noida, Faridabad, and Ghaziabad. Our mobile units are equipped for rapid site deployment."
  },
  {
    id: "03",
    question: "WHAT IS THE TYPICAL DURATION FOR A STANDARD CORE DRILL?",
    answer: "A standard 4-inch core in reinforced concrete typically takes 15-30 minutes depending on rebar density and material hardness. Setup time is usually an additional 10-15 minutes."
  },
  {
    id: "04",
    question: "ARE YOUR OPERATORS AND PROCESSES CERTIFIED?",
    answer: "Absolutely. All our operators are trained in structural safety protocols and heavy machinery operation. We are ISO 9001:2015 certified for structural modification services."
  },
  {
    id: "05",
    question: "DO YOU OFFER FREE SITE INSPECTIONS?",
    answer: "Yes, for major projects, we provide complimentary structural assessments and site inspections to determine the optimal cutting path and ensure safety."
  },
  {
    id: "06",
    question: "WHAT PROJECT SIZES DO YOU HANDLE?",
    answer: "We handle projects ranging from single residential core drills for AC installation to large-scale industrial floor modifications and high-rise structural alterations."
  },
  {
    id: "07",
    question: "DO YOU PROVIDE SERVICES ON WEEKENDS OR LATE HOURS?",
    answer: "Yes, we understand site deadlines are critical. We are available for late-hour operations (until 11:30 PM) and weekend site delivery by prior appointment."
  },
  {
    id: "08",
    question: "WHICH CONCRETE TYPES CAN YOUR DIAMOND TOOLS PENETRATE?",
    answer: "Our industrial-grade diamond-tipped tools can penetrate standard cement concrete, high-density Reinforced Cement Concrete (RCC), pre-stressed concrete, and even natural stone or heavy masonry."
  }
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-8 pt-28 pb-12 border-b-4 border-black swiss-grid-pattern relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-8 lg:pr-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-black text-white px-4 py-1 font-black text-xl mb-6"
            >
              04. COMMON QUESTIONS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3.5rem,8.5vw,8rem)] leading-[0.9] font-black uppercase tracking-[-0.05em] text-black"
            >
              TECHNICAL<br/>
              <span className="text-primary">/ DEPLOYMENT /</span><br/>
              SUPPORT.
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-4 border-black overflow-hidden h-[320px] relative bg-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <img 
                src="/faq_hero_drill_1775531043997.png" 
                alt="Technical Drill Specification"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-black text-xs tracking-widest uppercase mb-1">TECH ASSISTANCE</p>
                <div className="h-1 w-12 bg-primary" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-low p-8 border-4 border-black flex flex-col justify-end h-40 relative overflow-hidden text-black shadow-[8px_8px_0px_0px_rgba(255,48,0,1)]"
            >
              <div className="absolute top-4 left-4 font-black uppercase text-xs tracking-widest opacity-30">TECH SPEC SUPPORT</div>
              <p className="font-bold text-xl uppercase leading-tight opacity-70">FIND COMPREHENSIVE DATA ON DIAMOND CORE DRILLING, RCC CUTTING PROTOCOLS, AND SITE REQUIREMENTS.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="px-8 py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-0">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              className={`group border-black bg-white transition-colors duration-300 cursor-pointer overflow-hidden ${idx === 0 ? 'border-4' : 'border-4 border-t-0'}`}
            >
              <div className={`flex justify-between items-center p-8 transition-colors duration-300 ${activeId === faq.id ? 'bg-primary text-white' : 'hover:bg-primary/5'}`}>
                <div className="grid grid-cols-12 w-full gap-4 items-center">
                  <span className={`col-span-1 font-black text-xl ${activeId === faq.id ? 'opacity-100' : 'opacity-50'}`}>{faq.id}</span>
                  <h3 className="col-span-10 font-black text-2xl md:text-3xl uppercase tracking-tighter">{faq.question}</h3>
                  <div className="col-span-1 flex justify-end text-black">
                    <motion.div
                      animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={activeId === faq.id ? 'text-white' : 'text-primary'}
                    >
                      <Plus size={40} />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-8 pt-0 border-t-2 border-black/10">
                       <p className="text-xl font-medium leading-relaxed opacity-70 mt-6 max-w-4xl text-black">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra CTA */}
      <section className="w-full bg-primary py-20 px-8 border-t-4 border-black">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase text-white leading-none tracking-tighter mb-8">
            STILL HAVE QUESTIONS?<br/>
            CALL US NOW.
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="tel:+91800UNITYCORE"
              className="bg-black text-white px-12 py-6 text-2xl font-black uppercase hover:bg-white hover:text-black transition-colors duration-300 inline-block border-b-8 border-r-8 border-white/20"
            >
              +91 800-UNITY-CORE
            </a>
            <button className="bg-white text-black px-12 py-6 text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors duration-0 inline-block border-b-8 border-r-8 border-black">
              BOOK SITE VISIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
