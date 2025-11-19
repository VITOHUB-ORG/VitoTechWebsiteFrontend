// src/components/Swiper.tsx
import { useEffect, useState } from "react";

import vito1 from "/images/vito1.jpg";
import vito2 from "/images/vito2.jpg";
import vito3 from "/images/vito3.jpg";

const slides = [
  {
    id: 1,
    image: vito1,
    title: "AI Powered Innovation",
    text: "we deliver AI-powered solutions that automate processes, enhance decision-making, and drive innovation for businesses and individuals.",
  },
  {
    id: 2,
    image: vito2,
    title: "Smart & Scalable Software",
    text: "We develop innovative, user-centric software solutions that streamline operations, enhance efficiency, and drive digital transformation.",
  },
  {
    id: 3,
    image: vito3,
    title: "Experienced Team",
    text: "Our experienced team specializes in AI, software development, and digital design, creating intelligent, scalable, and user-centric solutions.",
  },
];

export default function Swiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setActiveIndex(index);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-300px)] overflow-hidden bg-black text-white"
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
            className={`absolute inset-0 flex bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out
              ${isActive ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}
            `}
          >
            {/* Dark gradient overlay juu ya picha */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full items-center">
              <div className="mx-auto flex h-full w-full max-w-6xl items-center px-4 py-24 md:px-10 lg:px-16">
                <div className="text-left">
                  <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-xl text-sm font-medium text-indigo-50/90 md:text-base">
                    {slide.text}
                  </p>

                  <div className="mt-8">
                    <a
                      href="#modalCta"
                      className="inline-flex items-center justify-center rounded-sm bg-indigo-500 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-indigo-600"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination ya mobile – dots chini katikati */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 md:hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-[3px] w-6 rounded-full transition-all
                ${isActive ? "w-8 bg-indigo-500" : "bg-white/40"}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Vertical pagination upande wa kulia (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 right-10 hidden flex-col items-center justify-center gap-6 md:flex lg:right-16">
        {/* 01/03 imezunguka upande */}
        <div className="flex items-center gap-1 text-[20px] font-semibold tracking-[0.25em] text-white transform -rotate-90">
          <span className="tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="opacity-60">/</span>
          <span className="tabular-nums">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* mstari mrefu katikati */}
        <div className="h-24 mt-6 w-px bg-white/40" />

        {/* bullets kama mwonekano wa template */}
        <div className="flex flex-col gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                className={`pointer-events-auto h-[3px] w-6 rounded-full transition-all
                  ${isActive ? "w-8 bg-blue-800" : "bg-white/40"}
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
