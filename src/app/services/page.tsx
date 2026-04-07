"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Ruler, Navigation2, Gem, ShieldCheck, Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="px-4 md:px-8 pt-28 pb-12 border-b-8 border-black swiss-grid-pattern relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-24 items-start relative z-10 w-full">
          <div className="lg:col-span-8 lg:pr-24 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-black text-white px-4 py-1 font-black text-xs md:text-xl mb-6 uppercase"
            >
              02. OUR CAPABILITIES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-text-clamp text-black break-words"
            >
              PRECISION<br/>
              <span className="text-primary italic">/ AT SCALE /</span><br/>
              STRUCTURAL.
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[200px] md:h-[300px] border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,48,0,0.1)] w-full"
            >
              <img 
                src="/services_hero_industrial_1775530746339.png" 
                alt="Industrial Core Cutting Services" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-low p-6 border-4 border-black flex flex-col justify-center min-h-[120px] relative overflow-hidden text-black"
            >
              <div className="absolute top-2 left-2 font-black uppercase text-[8px] tracking-widest opacity-30">EST. 2012 / PRCSN</div>
              <p className="font-bold text-base md:text-xl uppercase leading-tight opacity-70">DELIVERING SURGICAL PRECISION IN CONTROLLED DEMOLITION AND CORE PENETRATION SERVICES.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="px-4 md:px-8 py-12 md:py-24 max-w-[1440px] mx-auto bg-surface overflow-hidden w-full">
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {/* Service 01 */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 group w-full">
            <div className="md:col-span-6 order-2 md:order-1 w-full">
              <span className="text-5xl md:text-8xl font-black text-primary/20 block mb-2 md:mb-4">01</span>
              <h2 className="text-2xl md:text-5xl font-black uppercase mb-6 text-black tracking-tighter leading-none break-words">DIAMOND CORE DRILLING</h2>
              <p className="text-base md:text-xl text-black leading-relaxed mb-8 opacity-70">
                Our core drilling services utilize heavy-duty Hilti systems to penetrate densely reinforced concrete from 1 to 24 inches with zero structural vibration.
              </p>
              <ul className="grid grid-cols-1 xs:grid-cols-2 gap-3 w-full">
                {['HVAC Openings', 'Plumbing Lines', 'Electrical Conduits', 'Staircase Anchors', 'Soil Testing', 'Structural Sampling'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase text-[10px] md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary shrink-0" /> <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 relative h-[250px] md:h-[400px] border-4 border-black order-1 md:order-2 overflow-hidden w-full max-w-full">
               <img src="/diamond_core_drilling.png" alt="Diamond Core Drilling" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Service 02 */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 group w-full">
            <div className="md:col-span-6 relative h-[250px] md:h-[400px] border-4 border-black overflow-hidden w-full max-w-full">
               <img src="/concrete_wall_sawing.png" alt="Wall Sawing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-6 w-full">
              <span className="text-5xl md:text-8xl font-black text-primary/20 block mb-2 md:mb-4">02</span>
              <h2 className="text-2xl md:text-5xl font-black uppercase mb-6 text-black tracking-tighter leading-none break-words">CONCRETE WALL SAWING</h2>
              <p className="text-base md:text-xl text-black leading-relaxed mb-8 opacity-70">
                Track-mounted sawing for vertical surfaces. Precise cuts for doors, windows, and structural modifications with minimal dust and impact.
              </p>
              <ul className="grid grid-cols-1 xs:grid-cols-2 gap-3 w-full">
                {['Door Cutouts', 'Window Openings', 'Lifts & Elevator Shafts', 'Staircase Openings', 'Structural Alterations', 'Controlled Demolition'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase text-[10px] md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary shrink-0" /> <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 03 */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 group w-full">
            <div className="md:col-span-6 order-2 md:order-1 w-full">
              <span className="text-5xl md:text-8xl font-black text-primary/20 block mb-2 md:mb-4">03</span>
              <h2 className="text-2xl md:text-5xl font-black uppercase mb-6 text-black tracking-tighter leading-none break-words">RCC CUTTING & CHIPPING</h2>
              <p className="text-base md:text-xl text-black leading-relaxed mb-8 opacity-70">
                Heavy structural revisions combining diamond cutting with specialized chipping for surfaces ready for immediate installation.
              </p>
              <ul className="grid grid-cols-1 xs:grid-cols-2 gap-3 w-full">
                {['Floor Slab Cutting', 'Bridge Deck Cutting', 'Expansion Joints', 'Partial Demolition', 'Beams & Columns', 'Piling Caps'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase text-[10px] md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary shrink-0" /> <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 relative h-[250px] md:h-[400px] border-4 border-black order-1 md:order-2 overflow-hidden w-full max-w-full">
               <img src="/rcc_precision_cutting.png" alt="RCC Cutting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <aside className="w-full bg-primary border-t-8 border-b-8 border-black py-16 px-4 md:px-8 relative overflow-hidden mt-12 md:mt-24">
        <div className="absolute inset-0 swiss-diagonal opacity-20"></div>
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative z-10 w-full overflow-hidden">
          <div className="text-white w-full">
            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 break-words">READY TO START<br/>YOUR PROJECT?</h2>
            <p className="text-[10px] md:text-lg font-bold uppercase tracking-widest opacity-80">GET A PRECISION ESTIMATE WITHIN 24 HOURS.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link 
              href="/contact"
              className="w-full md:w-auto bg-black text-white px-8 md:px-12 py-5 font-black uppercase border-b-8 border-r-8 border-white/20 hover:bg-white hover:text-black transition-all inline-block text-center whitespace-nowrap text-lg"
            >
              REQUEST QUOTE
            </Link>
          </motion.div>
        </div>
      </aside>
    </div>
  );
}
