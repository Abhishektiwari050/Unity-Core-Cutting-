"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Construction, Cog } from "lucide-react";

export default function About() {
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
              01. OUR STORY
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3.5rem,8.5vw,8rem)] leading-[0.9] font-black uppercase tracking-[-0.05em] text-black"
            >
              ENGINEERING<br/>
              <span className="text-primary">/ PRECISION /</span><br/>
              SINCE 2012.
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
                src="/about_hero_precision_1775531023654.png" 
                alt="Precision Core Drilling"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-black text-xs tracking-widest uppercase mb-1">CORE SPECIFICATION</p>
                <div className="h-1 w-12 bg-primary" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-low p-8 border-4 border-black flex flex-col justify-end h-40 relative overflow-hidden text-black shadow-[8px_8px_0px_0px_rgba(255,48,0,1)]"
            >
              <div className="absolute top-4 left-4 font-black uppercase text-xs tracking-widest opacity-30">EST. 2012</div>
              <p className="font-bold text-xl uppercase leading-tight opacity-70">A DECADE OF UNCOMPROMISING PRECISION IN DELHI&apos;S INFRASTRUCTURE LANDSCAPE.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="px-8 py-24 max-w-[1440px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase mb-16 tracking-tighter"
        >
          CORE VALUES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-4 border-l-4 border-black">
          {[
            { id: "01", icon: <Ruler size={48} />, title: "PRECISION", desc: "Tolerance measured in millimeters. We utilize laser-guided systems to ensure every cut aligns perfectly." },
            { id: "02", icon: <ShieldCheck size={48} />, title: "SAFETY", desc: "Zero-accident mandate. Our operators are trained in structural risk mitigation and heavy machinery protocol." },
            { id: "03", icon: <Construction size={48} />, title: "RELIABILITY", desc: "24/7 industrial support. We understand the high-stakes nature of site deadlines and deliver consistent results." },
            { id: "04", icon: <Cog size={48} />, title: "INNOVATION", desc: "Continuous hardware upgrades. We invest in the latest diamond-tip technology and dust-suppression systems." }
          ].map((val, idx) => (
            <motion.div 
              key={val.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border-r-4 border-b-4 border-black hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-primary group-hover:text-white">{val.icon}</div>
                <span className="text-sm font-black opacity-20 group-hover:opacity-100">{val.id}</span>
              </div>
              <h4 className="text-2xl font-black uppercase mb-4">{val.title}</h4>
              <p className="opacity-60 group-hover:opacity-100">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Image & Stats Section */}
      <section className="px-8 py-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 h-[600px] border-4 border-black relative overflow-hidden"
          >
            <img 
              src="/industrial_site_overview.png" 
              alt="Industrial Site Overview" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
          <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-12">
            {[
              { label: "PRECISION ACCURACY", value: "0.5MM", desc: "Our diamond tools deliver tolerances within sub-millimeter ranges." },
              { label: "PROJECTS DELIVERED", value: "500+", desc: "Successful structural modifications across North India." },
              { label: "SAFETY RATING", value: "100%", desc: "Zero structural compromises across all major industrial sites." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b-2 border-black/10 pb-8"
              >
                <span className="text-xs font-black tracking-widest text-primary uppercase block mb-2">{stat.label}</span>
                <span className="text-6xl font-black text-black block mb-4 uppercase">{stat.value}</span>
                <p className="text-black font-medium opacity-60 uppercase text-sm leading-tight">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
