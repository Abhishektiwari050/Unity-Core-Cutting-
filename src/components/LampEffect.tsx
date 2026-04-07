"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F9F9F9] w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-gradient-from) at 50% 50%, #FF3100 0deg, transparent 80deg, transparent 120deg, #FF3100 180deg)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-to-r from-primary to-transparent text-white [--conic-gradient-from:from_70deg_at_50%_50%] before:absolute before:inset-y-0 before:left-0 before:h-full before:w-16 before:bg-[#F9F9F9] before:[mask-image:linear-gradient(to_right,white,transparent)] after:absolute after:inset-y-0 after:left-0 after:h-40 after:w-full after:bg-[#F9F9F9] after:[mask-image:linear-gradient(to_top,white,transparent)]"
        >
          <div className="absolute  w-full left-0 bg-[#F9F9F9] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,transparent,white)]" />
          <div className="absolute  w-40 h-full left-0 bg-[#F9F9F9]  bottom-0 z-20 [mask-image:linear-gradient(to_right,transparent,white)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-gradient-from) at 50% 50%, transparent 210deg, transparent 280deg, #FF3100 360deg, #FF3100 360deg)`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-to-l from-primary to-transparent text-white [--conic-gradient-from:from_290deg_at_50%_50%] before:absolute before:inset-y-0 before:right-0 before:h-full before:w-16 before:bg-[#F9F9F9] before:[mask-image:linear-gradient(to_left,white,transparent)] after:absolute after:inset-y-0 after:right-0 after:h-40 after:w-full after:bg-[#F9F9F9] after:[mask-image:linear-gradient(to_top,white,transparent)]"
        >
          <div className="absolute  w-40 h-full right-0 bg-[#F9F9F9]  bottom-0 z-20 [mask-image:linear-gradient(to_left,transparent,white)]" />
          <div className="absolute  w-full right-0 bg-[#F9F9F9] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,transparent,white)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#F9F9F9] blur-xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-sm"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-2xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary-400 blur-xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-primary"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#F9F9F9]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
