"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
// import TextShimmer from "@/components/ui/text-shimmer";
import { GetStartedButton } from "@/components/button/GetStartedButton";

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        id="hero"
        className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
      >
        <div
          className="backdrop-filter-[12px]
          group 
          inline-flex 
          h-7 
          translate-y-[-1rem] 
        animate-fade-in 
        items-center 
        justify-between gap-1 rounded-full 
        border border-white/5 bg-white/10 px-3 
        text-xs 
        text-white 
        
        
        "
        >
          <div className="inline-flex items-center justify-center text-primary">
            ✨ Introducing ProperyData
          </div>
        </div>
        <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:from-30% dark:to-white/70 sm:text-6xl md:text-7xl lg:text-8xl">
          Take control of your financial
          <br className="hidden md:block" />
          decisions.
        </h1>
        <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-gray-400 [--animation-delay:400ms] dark:text-gray-300 md:text-xl">
          PropertyData makes it easy to keep track of your properties.
          <br className="hidden md:block" /> Make the right financial decisions
          with us.
        </p>
        <GetStartedButton />
        <div
          ref={ref}
          className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
        >
          <div
            className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
              inView ? "before:animate-image-glow" : ""
            }`}
          >
            <img
              src="/hero-dark.png"
              alt="Hero Image"
              className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:block"
            />
            <img
              src="/hero-light.png"
              alt="Hero Image"
              className="relative block h-full w-full  rounded-[inherit] border object-contain dark:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
}
