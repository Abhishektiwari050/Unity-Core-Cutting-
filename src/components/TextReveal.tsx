"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export default function TextReveal({ text, className, containerClassName }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const words = textRef.current.querySelectorAll(".reveal-word");
      
      gsap.fromTo(
        words,
        {
          opacity: 0.1,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <div ref={containerRef} className={cn("py-20", containerClassName)}>
      <h2
        ref={textRef}
        className={cn(
          "text-[8vw] font-black leading-[0.9] tracking-tighter uppercase text-black flex flex-wrap",
          className
        )}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="reveal-word mr-[0.3em] inline-block">
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
}
