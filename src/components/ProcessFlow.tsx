"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Drill, Target, ShieldCheck, Factory, HardHat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Site Scanning",
    description: "Using GPR (Ground Penetrating Radar) to map internal reinforcement and conduits before drilling.",
    icon: Target,
    stats: "300mm Depth"
  },
  {
    title: "Surgical Extraction",
    description: "High-speed diamond core drilling with millimetric precision to ensure structural integrity.",
    icon: Drill,
    stats: "Up to 450mm Ø"
  },
  {
    title: "Wire Sawing",
    description: "Cold-cutting massive reinforced concrete structures with zero vibration using diamond wire technology.",
    icon: Factory,
    stats: "Unlimited Cutting Depth"
  },
  {
    title: "Waste Management",
    description: "Controlled removal and eco-friendly disposal of extracted cores and debris.",
    icon: HardHat,
    stats: "100% Site Cleanliness"
  }
];

export default function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line growth
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none", 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      // Animate steps
      const stepItems = containerRef.current?.querySelectorAll(".process-step");
      stepItems?.forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 bg-transparent relative overflow-hidden text-black">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-center text-black">SURGICAL<br /><span className="text-primary italic">PRECISION</span> FLOW</h2>
          <p className="text-xl font-bold text-primary tracking-[0.4em] uppercase italic">The Unity Methodology</p>
        </div>

        {/* Central Line */}
        <div className="absolute left-1/2 top-[300px] bottom-0 w-1 bg-black/10 -translate-x-1/2 hidden md:block" />
        <div 
          ref={lineRef}
          className="absolute left-1/2 top-[300px] bottom-0 w-1 bg-primary -translate-x-1/2 origin-top hidden md:block" 
        />

        <div className="flex flex-col gap-32 relative z-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`process-step flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-24`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <span className="text-primary font-black text-4xl mb-4 block italic">0{i + 1}</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none text-black">{step.title}</h3>
                <p className="text-lg font-bold text-black/60 max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              <div className="relative group">
                <div className="bg-black rounded-full p-8 relative z-10 border-4 border-primary group-hover:scale-110 transition-transform">
                  <step.icon className="text-white" size={48} />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
              </div>

              <div className="flex-1">
                <div className="p-6 border-2 border-black/10 bg-zinc-100 relative overflow-hidden group hover:border-primary transition-colors">
                  <div className="absolute top-0 right-0 p-2 bg-primary text-white font-black text-[10px] tracking-widest uppercase">Benchmark</div>
                  <p className="font-black text-xs tracking-widest text-primary mb-2 uppercase">Core Metric</p>
                  <p className="text-2xl font-black italic text-black">{step.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
