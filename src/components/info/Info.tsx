'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3000', 
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          scale: 2,
          yPercent: -10,
          opacity: 0,
        },
        {
          scale: 1.3,
          yPercent: 0,
          opacity: 1,
          duration: 1,
        }
      );

      // Step 2: Title kichrayadi va tepaga chiqadi
      tl.to(titleRef.current, {
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
      });

      // Step 3: Cardlar ketma-ket chiqadi
      cardRefs.current.forEach((card) => {
        if (card) {
          tl.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
            },
            '+=0.2' 
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        {/* Sticky Title */}
        <h2
          ref={titleRef}
          className="text-[32px] sm:text-[48px] font-bold text-center mb-[32px]"
        >
          Femmy kimlar uchun
        </h2>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6">
          {[
            {
              bg: '#FFE5F0',
              icon: '/assets/logo/girl-icon.svg',
              text: 'Yosh qizlar',
            },
            {
              bg: '#FFF3C7',
              icon: '/assets/logo/woman.svg',
              text: 'Farzand rejalayotganlar',
            },
            {
              bg: '#D9F1FF',
              icon: '/assets/logo/mother.svg',
              text: 'Yangi onalar',
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex items-center justify-center px-8 py-4 rounded-[48px] w-full sm:w-auto"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={58}
                height={58}
                className="w-[48px] sm:w-[58px] h-[48px] sm:h-[58px] mr-4"
              />
              <p className="text-[24px] sm:text-[32px] font-extrabold text-[var(--button-color)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
