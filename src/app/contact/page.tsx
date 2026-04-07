"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, MessageSquare, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
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
              04. CONNECT NOW
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-text-clamp text-black break-words"
            >
              LOCATE<br/>
              <span className="text-primary italic">/ CONTACT /</span><br/>
              SUPPORT.
            </motion.h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-4 w-full">
            <div className="bg-surface-container-low p-6 border-4 border-black flex flex-col justify-center min-h-[140px] relative overflow-hidden text-black shadow-[12px_12px_0px_0px_rgba(255,48,0,0.15)] w-full">
              <div className="absolute top-2 left-2 font-black uppercase text-[8px] tracking-widest opacity-30">RESPONSE TIME / 24H</div>
              <p className="font-bold text-base md:text-xl uppercase leading-tight opacity-80">OUR TECHNICAL APPRAISAL TEAM MOBILIZES WITHIN 24 HOURS FOR SITE EVALUATION ACROSS NORTH INDIA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-4 md:px-8 py-16 md:py-32 max-w-[1440px] mx-auto overflow-hidden w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-start w-full">
          {/* Left Side: Info Cards */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { icon: <Phone size={32} />, label: "Call Directly", val: "+91 9871 2345 67", desc: "Mon-Sat, 9AM-8PM" },
              { icon: <Mail size={32} />, label: "Technical Email", val: "INFO@UNITYCORE.IN", desc: "All inquiries within 24h" },
              { icon: <MapPin size={32} />, label: "HQ Location", val: "Gurugram, Haryana", desc: "Sector 18, Industrial Area" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-10 border-4 border-black bg-white hover:bg-black group transition-all duration-300 w-full overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]"
              >
                <div className="text-primary group-hover:scale-110 transition-transform mb-6">{item.icon}</div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black/40 group-hover:text-white/40 mb-2 block">{item.label}</span>
                <span className="text-xl md:text-3xl font-black uppercase text-black group-hover:text-white break-all leading-tight mb-2 block">{item.val}</span>
                <p className="text-xs md:text-base font-bold uppercase opacity-60 group-hover:opacity-100 group-hover:text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-12 w-full mt-12">
            <div className="h-[300px] md:h-[500px] w-full border-4 border-black relative grayscale hover:grayscale-0 transition-all cursor-crosshair">
                <div className="absolute inset-0 bg-zinc-200 swiss-grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black text-white p-8 border-r-8 border-b-8 border-primary font-black uppercase text-center max-w-xs">
                        <MapPin className="mx-auto mb-4 text-primary" size={48} />
                        <span className="text-sm tracking-widest block mb-2">Operational Center</span>
                        <span className="text-2xl">DELHI NCR INDUSTRIAL ZONE</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="w-full bg-black py-24 md:py-32 px-4 md:px-8 border-t-8 border-primary relative overflow-hidden">
         <div className="absolute inset-0 dotted-grid-red opacity-10" />
         <div className="max-w-[1440px] mx-auto text-center relative z-10 w-full">
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 break-words">READY FOR<br/><span className="text-primary italic">MOBILIZATION?</span></h2>
            <p className="font-bold text-base md:text-2xl text-white/60 uppercase max-w-2xl mx-auto mb-12 px-4">Our specialized teams are equipped for immediate deployment across North India.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full px-4">
              <Link 
                href="tel:+919871234567"
                className="w-full sm:w-auto bg-primary text-white font-black px-8 md:px-12 py-5 text-lg md:text-xl border-r-8 border-b-8 border-white/20 hover:translate-x-1 hover:translate-y-1 transition-all uppercase flex items-center justify-center gap-3"
              >
                Call Now <Phone size={24} />
              </Link>
              <Link 
                href="mailto:info@unitycore.in"
                className="w-full sm:w-auto bg-white text-black font-black px-8 md:px-12 py-5 text-lg md:text-xl border-r-8 border-b-8 border-primary hover:translate-x-1 hover:translate-y-1 transition-all uppercase flex items-center justify-center gap-3"
              >
                Send Email <Send size={24} />
              </Link>
            </div>
         </div>
      </section>

      {/* Social Verification Bar */}
      <div className="py-12 border-t-4 border-black/10 bg-white px-4">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-6">
          <p className="text-[10px] md:text-xs font-black tracking-[0.5em] text-black/20 uppercase">Connect on Industrial Networks</p>
          <div className="flex gap-8">
            <Linkedin size={32} className="text-black/20 hover:text-primary transition-colors cursor-pointer" />
            <Globe size={32} className="text-black/20 hover:text-black transition-colors cursor-pointer" />
            <MessageSquare size={32} className="text-black/20 hover:text-green-600 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
