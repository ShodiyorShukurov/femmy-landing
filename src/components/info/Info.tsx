'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

// Breakpoints ni aniqlash (sizning loyihangizdagiga moslang)
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const Info = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        {
          is2XL: `(min-width: ${BREAKPOINTS['2xl']}px)`,
          isXL: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS['2xl'] - 1}px)`,
          isLG: `(min-width: ${BREAKPOINTS.lg}px) and (max-width: ${BREAKPOINTS.xl - 1}px)`,
          isMD: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
          isSM: `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`,
          isMobile: `(max-width: ${BREAKPOINTS.sm - 1}px)`, // Mobil o'lcham
        },
        (context) => {
          const { isMobile, isSM, isMD } = context.conditions || {};

          let scrollEndValue = '+=3000'; 
          let titleScaleFrom = 2;
          let titleScaleTo = 1.3;
          let titleYPercentFrom = -10;
          let cardAnimationDuration = 0.8;
          let cardAnimationDelay = '+=0.2';


          if (isMobile) {
            scrollEndValue = '+=1000'; // Mobil uchun qisqaroq skroll masofasi
            titleScaleFrom = 1.5; // Kichikroq kattalashish
            titleScaleTo = 1.1; // Kichikroq kattalashish
            titleYPercentFrom = -5; // Kamroq vertikal siljish
            cardAnimationDuration = 0.6; // Tezroq kartalar animatsiyasi
            cardAnimationDelay = '+=0.1'; // Kamroq kechikish
          } else if (isSM) {
            scrollEndValue = '+=1200';
            titleScaleFrom = 1.7;
            titleScaleTo = 1.2;
            titleYPercentFrom = -7;
          } else if (isMD) {
            scrollEndValue = '+=1500';
            titleScaleFrom = 1.8;
            titleScaleTo = 1.25;
            titleYPercentFrom = -8;
          }
          // qolgan katta ekranlar uchun default qiymatlar ishlayveradi

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: scrollEndValue, // Dinamik end qiymati
              scrub: true,
              pin: true,
              anticipatePin: 1,
              // markers: true,
            },
          });

          // Sarlavha animatsiyasi
          tl.fromTo(
            titleRef.current,
            {
              scale: titleScaleFrom,
              yPercent: titleYPercentFrom,
              opacity: 0,
            },
            {
              scale: titleScaleTo,
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.inOut',
            }
          );

          tl.to(titleRef.current, {
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
          });

          // Kartalar ketma-ket chiqadi
          cardRefs.current.forEach((card) => {
            if (card) {
              tl.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: cardAnimationDuration,
                  ease: 'power2.out',
                },
                cardAnimationDelay // Dinamik kechikish
              );
            }
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []); // dependencies bo'sh qolishi kerak, chunki matchMedia o'zgarishlarni o'zi boshqaradi

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        {/* Sticky Title */}
        <h2
          ref={titleRef}
          className="text-[32px] sm:text-[48px] font-bold text-center mb-[32px] text-[var(--button-color)]"
        >
          {t('info.title')}
        </h2>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6">
          {[
            {
              bg: '#FFE5F0',
              icon: '/assets/logo/girl-icon.svg',
              text: t('info.text1'),
            },
            {
              bg: '#FFF3C7',
              icon: '/assets/logo/woman.svg',
              text: t('info.text2'),
            },
            {
              bg: '#D9F1FF',
              icon: '/assets/logo/mother.svg',
              text: t('info.text3'),
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