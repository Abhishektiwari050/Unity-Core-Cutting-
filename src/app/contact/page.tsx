"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, ArrowRight, Star } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  details: z.string().min(10, "Please provide more project details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    alert("Project inquiry submitted successfully! We will contact you shortly.");
  };

  return (
    <div className="overflow-x-hidden">
      <section className="px-6 md:px-8 pt-28 pb-12 border-b-4 border-black swiss-grid-pattern relative overflow-hidden bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
          <div className="lg:col-span-8 lg:pr-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-black text-white px-4 py-1 font-black text-xl mb-6"
            >
              03. INITIATE PROJECT
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-text-clamp text-black mt-4"
            >
              LET&apos;S HEAR<br/>
              <span className="text-primary">/ THE SPECS /</span><br/>
              OF THE SITE.
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
                src="/contact_hero_van_1775531064671.png" 
                alt="Stationed Service Unit"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-black text-xs tracking-widest uppercase mb-1">READY FOR DISPATCH</p>
                <div className="h-1 w-12 bg-primary" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-low p-8 border-4 border-black flex flex-col justify-end h-40 relative overflow-hidden text-black shadow-[8px_8px_0px_0px_rgba(255,48,0,1)]"
            >
              <div className="absolute top-4 left-4 font-black uppercase text-xs tracking-widest opacity-30">LOC: NEW DELHI</div>
              <p className="font-bold text-xl uppercase leading-tight opacity-70">OUR MOBILE CORE CUTTING UNITS ARE READY FOR DEPLOYMENT ACROSS DELHI NCR.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-[1440px] mx-auto bg-surface">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="w-full lg:col-span-7">
            <h2 className="text-5xl font-black uppercase mb-12 text-black tracking-tighter italic">SUBMIT SPECIFICATIONS</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-primary">FULL NAME</label>
                  <input 
                    {...register("fullName")}
                    type="text" 
                    placeholder="E.G. RAJESH KUMAR"
                    className="w-full bg-white border-4 border-black p-4 font-bold uppercase focus:bg-primary/5 outline-none transition-colors text-black"
                  />
                  {errors.fullName && <span className="text-primary text-[10px] font-bold">{errors.fullName.message}</span>}
                </div>
                <div className="group">
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-primary">CONTACT NUMBER</label>
                  <input 
                    {...register("phone")}
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-white border-4 border-black p-4 font-bold uppercase focus:bg-primary/5 outline-none transition-colors text-black"
                  />
                  {errors.phone && <span className="text-primary text-[10px] font-bold">{errors.phone.message}</span>}
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-primary">SITE ADDRESS / LOCATION</label>
                <input 
                  type="text" 
                  placeholder="GANDHI NAGAR, DELHI..."
                  className="w-full bg-white border-4 border-black p-4 font-bold uppercase focus:bg-primary/5 outline-none transition-colors text-black"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-primary">SERVICE REQUIRED</label>
                <select 
                  {...register("service")}
                  className="w-full bg-white border-4 border-black p-4 font-bold uppercase focus:bg-primary/5 outline-none transition-colors text-black"
                >
                  <option value="">SELECT SERVICE</option>
                  <option value="DIAMOND CORE DRILLING">DIAMOND CORE DRILLING</option>
                  <option value="RCC WALL CUTTING">RCC WALL CUTTING</option>
                  <option value="SLAB BEAM MODIFICATION">SLAB BEAM MODIFICATION</option>
                  <option value="CONTROLLED DEMOLITION">CONTROLLED DEMOLITION</option>
                  <option value="OTHER / CUSTOM SPECS">OTHER / CUSTOM SPECS</option>
                </select>
              </div>

              <motion.button 
                whileHover={{ backgroundColor: "#FF3000", color: "#FFFFFF" }}
                className="w-full bg-black text-white py-6 font-black uppercase text-xl transition-colors duration-0 flex items-center justify-between px-8"
                type="submit"
              >
                SEND INQUIRY
                <ArrowRight size={32} />
              </motion.button>
            </form>
          </div>

          {/* Info Side */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
             <div className="bg-black p-12 text-white border-b-8 border-r-8 border-primary relative overflow-hidden">
                <div className="swiss-noise absolute inset-0 opacity-20"></div>
                <h3 className="text-3xl font-black uppercase mb-8 relative z-10">DIRECT DISPATCH</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <Phone className="text-primary mt-1" />
                    <div>
                      <p className="font-black text-xl">+91 800-UNITY-CORE</p>
                      <p className="text-xs font-bold opacity-50 uppercase">24/7 SITE EMERGENCY SUPPORT</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-primary mt-1" />
                    <div>
                      <p className="font-black text-xl">PROJECTS@UNITYCORE.IN</p>
                      <p className="text-xs font-bold opacity-50 uppercase">FOR CORPORATE TENDERS & RFQ</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="p-12 border-4 border-black swiss-grid-pattern bg-white/50">
                <h3 className="text-3xl font-black uppercase mb-8 text-black">HEADQUARTERS</h3>
                <div className="flex gap-4 items-start text-black">
                  <MapPin className="text-primary mt-1 flex-shrink-0" />
                  <p className="font-bold text-xl leading-tight uppercase">
                    PLOT NO 24, VISHWAS PARK,<br/>
                    UTTAM NAGAR,<br/>
                    NEW DELHI 110059
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t-2 border-black/10 flex gap-4">
                  <a href="#" aria-label="Our global reach" className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-primary transition-colors"><Globe size={24} /></a>
                  <a href="#" className="px-6 h-12 bg-black text-white flex items-center justify-center font-black uppercase text-xs tracking-widest hover:bg-primary transition-colors">GET DIRECTIONS</a>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Mail = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPin = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const Globe = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
);
