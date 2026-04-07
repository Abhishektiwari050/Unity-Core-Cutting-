"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Construction, Cog } from "lucide-react";

export default function About() {
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
              01. OUR STORY
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-text-clamp text-black break-words"
            >
              ENGINEERING<br/>
              <span className="text-primary italic">/ PRECISION /</span><br/>
              SINCE 2012.
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-4 border-black overflow-hidden h-[250px] md:h-[320px] relative bg-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] w-full"
            >
              <img 
                src="/about_hero_precision_1775531023654.png" 
                alt="Precision Core Drilling"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-black text-[10px] tracking-widest uppercase mb-1">CORE SPECIFICATION</p>
                <div className="h-1 w-8 bg-primary" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-low p-6 border-4 border-black flex flex-col justify-end min-h-[120px] relative overflow-hidden text-black shadow-[8px_8px_0px_0px_rgba(255,48,0,0.2)] w-full"
            >
              <div className="absolute top-2 left-2 font-black uppercase text-[8px] tracking-widest opacity-30">EST. 2012</div>
              <p className="font-bold text-base md:text-xl uppercase leading-tight opacity-70">A DECADE OF UNCOMPROMISING PRECISION IN DELHI'S INFRASTRUCTURE LANDSCAPE.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1440px] mx-auto overflow-hidden w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-7xl font-black uppercase mb-12 md:mb-16 tracking-tighter leading-none"
        >
          CORE VALUES
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t-4 border-l-4 border-black w-full overflow-hidden">
          {[
            { id: "01", icon: <Ruler size={32} />, title: "PRECISION", desc: "Tolerance measured in millimeters. We utilize laser-guided systems to ensure every cut aligns perfectly." },
            { id: "02", icon: <ShieldCheck size={32} />, title: "SAFETY", desc: "Zero-accident mandate. Our operators are trained in structural risk mitigation protocols." },
            { id: "03", icon: <Construction size={32} />, title: "RELIABILITY", desc: "24/7 industrial support. We understand the high-stakes nature of site deadlines." },
            { id: "04", icon: <Cog size={32} />, title: "INNOVATION", desc: "Continuous hardware upgrades. We invest in the latest diamond-tip technology systems." }
          ].map((val, idx) => (
            <motion.div 
              key={val.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-12 border-r-4 border-b-4 border-black hover:bg-black hover:text-white transition-all group overflow-hidden w-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary group-hover:text-white">{val.icon}</div>
                <span className="text-[10px] md:text-sm font-black opacity-20 group-hover:opacity-100">{val.id}</span>
              </div>
              <h4 className="text-xl md:text-3xl font-black uppercase mb-4 break-words leading-none">{val.title}</h4>
              <p className="text-sm md:text-base opacity-60 group-hover:opacity-100 leading-snug">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Image & Stats Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1440px] mx-auto overflow-hidden w-full">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-start w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:col-span-7 aspect-square md:h-[600px] border-4 border-black relative overflow-hidden"
          >
            <img 
              src="/industrial_site_overview.png" 
              alt="Industrial Site Overview" 
              className="w-full h-full object-cover grayscale" 
            />
          </motion.div>
          <div className="w-full md:col-span-5 flex flex-col gap-8 w-full overflow-hidden">
            {[
              { label: "PRECISION ACCURACY", value: "0.5MM", desc: "Our diamond tools deliver tolerances within sub-millimeter ranges." },
              { label: "PROJECTS DELIVERED", value: "2,500+", desc: "Successful structural modifications across India." },
              { label: "SAFETY RATING", value: "100%", desc: "Zero structural compromises across all sites." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b-2 border-black/10 pb-6 w-full overflow-hidden"
              >
                <span className="text-[10px] md:text-xs font-black tracking-widest text-primary uppercase block mb-2">{stat.label}</span>
                <span className="text-4xl md:text-7xl font-black text-black block mb-2 uppercase leading-none break-all">{stat.value}</span>
                <p className="text-black/60 font-bold uppercase text-[10px] md:text-sm leading-tight break-words">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
