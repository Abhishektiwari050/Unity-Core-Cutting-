"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Microscope, 
  HardHat, 
  Factory, 
  Drill,
  Cog,
  CheckCircle2,
  Gem
} from "lucide-react";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { LampContainer } from "@/components/LampEffect";
import ProcessFlow from "@/components/ProcessFlow";
import IndustrialFAQ from "@/components/IndustrialFAQ";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Horizontal Scroll for Equipment Reel
      const pin = horizontalRef.current;
      if (pin) {
        const items = pin.querySelectorAll(".equipment-card");
        const totalWidth = pin.scrollWidth - window.innerWidth;

        gsap.to(pin, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // 2. Background Darken on Scroll Transition removed as per user request
      // Maintaining light theme throughout.
      
    }, mainWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainWrapperRef} className="relative">
      <div className="swiss-noise fixed inset-0 z-50 pointer-events-none" />
      
      {/* --- HERO SECTION (Always Light) --- */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col pt-20 md:pt-24 pb-12 px-6 md:px-8 relative overflow-hidden bg-[#F9F9F9]">
        <div className="absolute inset-0 dotted-grid-red pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full swiss-diagonal opacity-10 hidden md:block" />
        
        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <div className="flex flex-col gap-4 mb-8">
            <span className="bg-primary text-white font-black text-xs tracking-[0.4em] px-4 py-1 self-start border-r-4 border-b-4 border-black">
              EST. 2012 / GURUGRAM
            </span>
            <h1 className="hero-text-clamp font-black uppercase text-black leading-[0.85]">
              PRECISION<br />
              <span className="text-primary italic">CORE</span> CUTTING
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start transition-all duration-700 ease-in-out">
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight max-w-2xl text-black/80 mt-6">
                INDUSTRIAL STRENGTH MEETS SURGICAL ACCURACY. WE ARE THE GOLD STANDARD IN CORE DRILLING.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6 relative group">
              <div className="absolute -top-24 -right-12 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity hidden md:block" />
              <div className="absolute -top-24 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity hidden md:block" />
              <div className="relative h-[320px] border-4 border-black overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="relative w-full h-full">
                <Image 
                  src="/industrial_core_drill_hero.png" 
                  alt="Industrial Core Drilling" 
                  fill
                  priority
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white font-black uppercase text-xl">Operational Excellence</p>
                </div>
              </div>
              <Link
                href="/services"
                className="group w-full md:w-auto bg-black text-white p-8 font-black text-2xl flex items-center justify-between hover:bg-primary transition-colors border-b-8 border-r-8 border-black/20"
              >
                EXPLORE SERVICES
                <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="overflow-hidden relative z-20 border-b-4 border-black w-full">
        <Marquee items={["DIAMOND CORE DRILLING", "CONCRETE CUTTING", "WIRE SAWING", "CHEMICAL ANCHORING", "SCANNING"]} />
      </div>

      {/* --- DARKEN TRIGGER POINT --- */}
      <div className="darken-trigger" />

      {/* --- REVEAL SECTION --- */}
      <section className="px-6 md:px-8 bg-transparent overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto">
          <TextReveal 
            text="ENGINEERING THE FUTURE OF INFRASTRUCTURE THROUGH PRECISION" 
            containerClassName="py-32"
            className="text-black"
          />
        </div>
      </section>

      {/* --- CLIENT MARQUEE --- */}
      <div className="bg-zinc-100 py-4 border-y border-black/5 overflow-hidden">
        <div className="flex gap-16 animate-marquee-slow whitespace-nowrap px-8 items-center opacity-30">
          {["TATA PROJECTS", "L&T CONSTRUCTION", "DLF LUXE", "ADANI INFRA", "HILTI SYSTEMS", "SHAPOORJI PALLONJI", "RAIL INFRA"].map((client) => (
            <span key={client} className="text-4xl font-black italic tracking-tighter text-black">{client}</span>
          ))}
        </div>
      </div>

      {/* --- BENTO GRID: OUR STRENGTHS --- */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-transparent relative overflow-hidden">
         <div className="max-w-[1440px] mx-auto mb-16">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-black">Core Strengths</h2>
            <p className="text-xl font-bold text-primary tracking-widest uppercase italic">01. Why Choose Unity Core</p>
         </div>
        
        <BentoGrid>
          <BentoGridItem
            title="Surgical Precision"
            description="Our Hilti-powered diamond drilling systems achieve accuracy within 0.1mm tolerance for critical infrastructure."
            header={<div className="h-full min-h-[6rem] bg-zinc-100 overflow-hidden border-b border-black/5 relative"><Image src="/diamond_core_drilling.png" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Precision" /></div>}
            icon={<Target className="text-primary" size={32} />}
            className="md:col-span-2 text-black"
          />
          <BentoGridItem
            title="Safety First"
            description="100% adherence to ISO 45001 safety standards."
            header={<div className="h-full min-h-[6rem] bg-primary/5 flex items-center justify-center border-b border-black/5"><ShieldCheck className="text-primary" size={64} /></div>}
            className="text-black"
          />
          <BentoGridItem
            title="Rapid Response"
            description="24/7 mobilization for emergency site restoration."
            header={<div className="h-full min-h-[6rem] bg-zinc-100/50 flex items-center justify-center border-b border-black/5"><Zap className="text-primary" size={48} /></div>}
            className="text-black"
          />
          <BentoGridItem
            title="Advanced Fleet"
            description="Equipped with the latest Wire Saws and Wall Saws from global leaders."
            header={<div className="h-full min-h-[6rem] bg-zinc-100 overflow-hidden border-b border-black/5 relative"><Image src="/rcc_precision_cutting.png" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Advanced Fleet" /></div>}
            icon={<Factory className="text-primary" size={32} />}
            className="md:col-span-2 text-black"
          />
        </BentoGrid>
      </section>

      {/* --- PROCESS FLOW --- */}
      <div className="bg-transparent text-black">
        <ProcessFlow />
      </div>

      {/* --- HORIZONTAL EQUIPMENT REEL --- */}
      <section ref={sectionRef} className="h-screen bg-transparent overflow-hidden flex flex-col justify-center border-y-2 border-black/10">
        <div className="px-8 mb-12">
           <h2 className="text-6xl md:text-[8vw] font-black text-black leading-none tracking-tighter uppercase shrink-0">
            EQUIPMENT<span className="text-primary italic font-black">REEL</span>
          </h2>
        </div>
        
        <div ref={horizontalRef} className="flex gap-8 px-8 items-center cursor-none">
          {[
            { id: 1, title: "DD 250 Diamond Core Drill", type: "HILTI POWER", stats: "Up to 450mm" },
            { id: 2, title: "DST 10 Wall Saw", type: "HYDRAULIC", stats: "Depth 320mm" },
            { id: 3, title: "D-LP 15 Wire Saw", type: "PNEUMATIC", stats: "Unlimited Depth" },
            { id: 4, title: "PS 1000 X-Scan", type: "GPR SCANNING", stats: "Depth 300mm" },
            { id: 5, title: "TE 3000 Demolition", type: "BREAKING", stats: "75 Joules" },
          ].map((item) => (
            <div 
              key={item.id} 
              className="equipment-card min-w-[400px] md:min-w-[600px] h-[400px] md:h-[600px] bg-white border-4 border-black/10 hover:border-primary transition-colors p-12 flex flex-col justify-between group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]"
            >
               <span className="text-primary font-black text-xl italic tracking-widest">{item.type}</span>
               <div>
                  <h3 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">{item.title}</h3>
                  <div className="flex items-center gap-4 border-t-2 border-black/10 pt-4">
                     <Cog className="animate-spin-slow text-black/40" size={24} />
                     <p className="text-black/60 font-bold tracking-widest uppercase">Capacity: {item.stats}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LAMP SPOTLIGHT MESSAGE --- */}
      <LampContainer className="py-20">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-black to-neutral-700 py-4 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent md:text-7xl uppercase leading-none"
        >
          Built on Trust.<br />Driven by <span className="text-primary">Precision</span>.
        </motion.h1>
        <Link href="/contact" className="mt-12 bg-primary text-white font-black px-12 py-4 border-b-8 border-r-8 border-black hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest">
           Start Your Project
        </Link>
      </LampContainer>

      {/* --- FAQ SECTION --- */}
      <div className="bg-transparent">
        <IndustrialFAQ />
      </div>

      {/* --- STATS SECTION --- */}
      <section className="py-16 md:py-24 bg-white text-black relative overflow-hidden border-t-8 border-black">
        <div className="absolute inset-0 swiss-grid-pattern opacity-10 hidden md:block" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {[
            { label: "YEARS OF EXCELLENCE", value: "12+" },
            { label: "PROJECTS COMPLETED", value: "2,500+" },
            { label: "PRECISION RATING", value: "99.9%" },
            { label: "SAFETY INCIDENTS", value: "0" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col border-l-4 border-primary pl-8">
              <span className="text-7xl font-black italic tracking-tighter leading-none mb-2">{stat.value}</span>
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
