"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Ruler, Navigation2, Gem, ShieldCheck, Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-8 pt-28 pb-12 border-b-4 border-black swiss-grid-pattern relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-8 lg:pr-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-black text-white px-4 py-1 font-black text-xl mb-8"
            >
              02. OUR CAPABILITIES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3.5rem,8.5vw,8rem)] leading-[0.85] font-black uppercase tracking-[-0.05em] text-black"
            >
              PRECISION<br/>
              <span className="text-primary">/ AT SCALE /</span><br/>
              STRUCTURAL.
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[300px] border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,48,0,0.1)]"
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
              className="bg-surface-container-low p-8 border-4 border-black flex items-end h-40 relative overflow-hidden text-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute top-4 left-4 font-black uppercase text-xs tracking-widest opacity-30">EST. 2024 / PRCSN</div>
              <p className="font-bold text-xl uppercase leading-tight opacity-70">DELIVERING SURGICAL PRECISION IN CONTROLLED DEMOLITION AND CORE PENETRATION SERVICES.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="px-8 py-24 max-w-[1440px] mx-auto bg-surface">
        <div className="flex flex-col gap-24">
          {/* Service 01 */}
          <div className="grid grid-cols-12 gap-12 group">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <span className="text-8xl font-black text-primary/20 block mb-4">01</span>
              <h2 className="text-5xl font-black uppercase mb-6 text-black tracking-tighter">DIAMOND CORE DRILLING</h2>
              <p className="text-xl text-black leading-relaxed mb-8 opacity-70">
                Our core drilling services utilize heavy-duty Hilti and industrial-grade diamond-tipped cores to penetrate even the most densely reinforced concrete. From 1-inch plumbing lines to 24-inch industrial conduits, we ensure anatomical precision without structural vibration.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['HVAC Openings', 'Plumbing Lines', 'Electrical Conduits', 'Staircase Anchors', 'Soil Testing', 'Structural Sampling'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase">
                    <span className="w-2 h-2 bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 relative h-[400px] border-4 border-black order-1 md:order-2 overflow-hidden">
               <img src="/diamond_core_drilling.png" alt="Diamond Core Drilling" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Service 02 */}
          <div className="grid grid-cols-12 gap-12 group">
            <div className="col-span-12 md:col-span-6 relative h-[400px] border-4 border-black overflow-hidden">
               <img src="/concrete_wall_sawing.png" alt="Wall Sawing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <span className="text-8xl font-black text-primary/20 block mb-4">02</span>
              <h2 className="text-5xl font-black uppercase mb-6 text-black tracking-tighter">CONCRETE WALL SAWING</h2>
              <p className="text-xl text-black leading-relaxed mb-8 opacity-70">
                Track-mounted sawing for vertical and horizontal surfaces. We deliver clean, precise cuts for doors, windows, and structural modifications. Our system minimizes dust and structural impact while maintaining exact tolerance.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['Door Cutouts', 'Window Openings', 'Lifts & Elevator Shafts', 'Staircase Openings', 'Structural Alterations', 'Controlled Demolition'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase">
                    <span className="w-2 h-2 bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 03 */}
          <div className="grid grid-cols-12 gap-12 group">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <span className="text-8xl font-black text-primary/20 block mb-4">03</span>
              <h2 className="text-5xl font-black uppercase mb-6 text-black tracking-tighter">RCC CUTTING & CHIPPING</h2>
              <p className="text-xl text-black leading-relaxed mb-8 opacity-70">
                Expert RCC cutting services for slab modifications and heavy structural revisions. We combine diamond cutting with specialized chipping tools for a finished surface ready for immediate installation.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['Floor Slab Cutting', 'Bridge Deck Cutting', 'Expansion Joints', 'Partial Demolition', 'Beams & Columns', 'Piling Caps'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-bold text-black uppercase">
                    <span className="w-2 h-2 bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 relative h-[400px] border-4 border-black order-1 md:order-2 overflow-hidden">
               <img src="/rcc_precision_cutting.png" alt="RCC Cutting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <aside className="w-full bg-primary border-t-4 border-b-4 border-black py-20 px-8 relative overflow-hidden mt-24">
        <div className="absolute inset-0 swiss-diagonal opacity-20"></div>
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4">READY TO START<br/>YOUR PROJECT?</h2>
            <p className="text-lg font-bold uppercase tracking-widest opacity-80">GET A PRECISION ESTIMATE WITHIN 24 HOURS.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact"
              className="bg-black text-white px-12 py-6 text-2xl font-black uppercase border-b-8 border-r-8 border-white/20 hover:bg-white hover:text-black transition-all duration-300 inline-block"
            >
              REQUEST QUOTE
            </Link>
          </motion.div>
        </div>
      </aside>
    </div>
  );
}
