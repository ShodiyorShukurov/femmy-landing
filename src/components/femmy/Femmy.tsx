'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const Femmy = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { t } = useTranslation();

  // CARD_DATA ni o'zgartirmaymiz
  const CARD_DATA = [
    {
      positions: {
        default: { top: '180px', left: '-30%' },
        sm: { top: '180px', left: '-10%' },
        md: { top: '180px', left: '-10%' },
        lg: { top: '180px', left: '1%' },
        xl: { top: '180px', left: '2%' },
        '2xl': { top: '180px', left: '3%' },
      },
      bg: '#FFF8EB',
      text: t('femmy.card1_title'),
      icon: '/assets/logo/femmy-card1.svg',
      color: '#CF3666',
    },
    {
      positions: {
        default: { top: '5%', left: '30%' },
        sm: { top: '0px', left: '35%' },
        md: { top: '0px', left: '40%' },
        lg: { top: '0px', left: '45%' },
        xl: { top: '0px', left: '45%' },
        '2xl': { top: '0px', left: '45%' },
      },
      bg: '#FFEAE6',
      text: t('femmy.card2_title'),
      icon: '/assets/logo/femmy-card2.svg',
      color: '#EB497C',
    },
    {
      positions: {
        default: { top: '180px', left: '92%' },
        sm: { top: '180px', left: '90%' },
        md: { top: '180px', left: '90%' },
        lg: { top: '180px', left: '80%' },
        xl: { top: '100px', left: '80%' },
        '2xl': { top: '50px', left: '80%' },
      },
      bg: '#FFE8FD',
      text: t('femmy.card3_title'),
      icon: '/assets/logo/femmy-card3.svg',
      color: '#C55EBD',
    },
    {
      positions: {
        default: { top: '50%', left: '-30%' },
        sm: { top: '50%', left: '-10%' },
        md: { top: '60%', left: '20%' },
        lg: { top: '60%', left: '25%' },
        xl: { top: '65%', left: '20%' },
        '2xl': { top: '65%', left: '20%' },
      },
      bg: '#FFE3E8',
      text: t('femmy.card4_title'),
      icon: '/assets/logo/femmy-card4.svg',
      color: '#D4041F',
    },
    {
      positions: {
        default: { top: '50%', left: '92%' },
        sm: { top: '50%', left: '90%' },
        md: { top: '60%', left: '80%' },
        lg: { top: '60%', left: '80%' },
        xl: { top: '65%', left: '80%' },
        '2xl': { top: '65%', left: '80%' },
      },
      bg: '#FFF1F3',
      text: t('femmy.card5_title'),
      icon: '/assets/logo/femmy-card5.svg',
      color: '#D11D56',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        {
          is2XL: `(min-width: ${BREAKPOINTS['2xl']}px)`,
          isXL: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS['2xl'] - 1}px)`,
          isLG: `(min-width: ${BREAKPOINTS.lg}px) and (max-width: ${BREAKPOINTS.xl - 1}px)`,
          isMD: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
          isSM: `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`,
          isMobile: `(max-width: ${BREAKPOINTS.sm - 1}px)`,
        },
        (context) => {
          interface Position {
            top?: string;
            left?: string;
            bottom?: string;
            right?: string;
          }

          // CARD_DATA dagi "positions"ni o'zgartirmasdan, uning o'rniga
          // ushbu funksiya mos breakpointga tegishli pozitsiyani qaytaradi.
          const getPosForBreakpoint = (item: typeof CARD_DATA[0]): Position => {
            if (context.conditions?.is2XL) return item.positions['2xl'];
            if (context.conditions?.isXL) return item.positions.xl;
            if (context.conditions?.isLG) return item.positions.lg;
            if (context.conditions?.isMD) return item.positions.md;
            if (context.conditions?.isSM) return item.positions.sm;
            // Agar isMobile uchun maxsus position mavjud bo'lmasa,
            // default yoki sm dan foydalanamiz, chunki siz card.positions.mobile ni qo'shmadingiz.
            return item.positions.default;
          };

          let scrollEnd = '+=2000'; // Default katta ekranlar uchun
          let titleScaleTo = 0.5; // Sarlavha scale default
          let animationDuration = 1.5; // Animatsiya muddati default

          if (context.conditions?.isMobile) {
            scrollEnd = '+=1000'; // Mobil uchun qisqaroq skroll
            titleScaleTo = 0.8; // Mobil uchun sarlavha kattaroq
            animationDuration = 1; // Mobil uchun tezroq animatsiya
          } else if (context.conditions?.isSM) {
            scrollEnd = '+=1200';
            titleScaleTo = 0.7;
            animationDuration = 1.2;
          } else if (context.conditions?.isMD) {
            scrollEnd = '+=1500';
            titleScaleTo = 0.6;
            animationDuration = 1.3;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: scrollEnd, // Dinamik `end` qiymati
              scrub: true,
              pin: true,
              // markers: true, // Test uchun
            },
          });

          // Sarlavha animatsiyasi
          tl.to(
            titleRef.current,
            {
              scale: titleScaleTo, // Dinamik scale
              opacity: 0.2,
              duration: 1,
              ease: 'power2.inOut',
            },
            0
          );

          tl.to(
            titleRef.current,
            {
              zIndex: 1,
              duration: 0.01,
            },
            '<+=0.9'
          );

          // Kartalar animatsiyasi
          CARD_DATA.forEach((item, index) => {
            const card = cardRefs.current[index];
            if (card) {
              const fromPosition = getPosForBreakpoint(item);

              // Kartaning boshlang'ich pozitsiyasini o'rnatamiz
              // Bu kartani render paytida to'g'ri joyda bo'lishini ta'minlaydi
              gsap.set(card, {
                position: 'absolute', // Absolute position shart
                ...fromPosition,
              });

              tl.to(
                card,
                {
                  left: '50%',
                  top: '50%',
                  xPercent: -50,
                  yPercent: -50,
                  zIndex: 10 + index,
                  ease: 'power2.out',
                  duration: animationDuration, // Dinamik muddat
                },
                0.5 // Sarlavha animatsiyasi boshlanganidan keyin biroz kechikish bilan
              );
            }
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [t]); // `t` o'zgarishi animatsiyani qayta yuklashga sabab bo'lsin

  return (
    <section
      ref={sectionRef}
      className="pb-[160px] relative overflow-hidden h-[100vh] sm:h-[120vh] md:h-[120vh] lg:h-[130vh] xl:h-[140vh] flex flex-col items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center h-full">
        <h2
          ref={titleRef}
          className="text-[40px] leading-[120%] font-extrabold text-center text-[var(--button-color)] w-full max-w-[343px] md:max-w-[640px] z-20 mx-auto sm:text-[40px] md:text-[60px] lg:text-[60px] xl:text-[65px] 2xl:max-w-[840px] 2xl:text-[80px]"
        >
          {t('femmy.title')}
        </h2>

        {CARD_DATA.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`absolute flex flex-col items-center justify-between p-4 lg:p-6 rounded-[24px]
                         max-w-[180px] max-h-[190px]
                         sm:max-w-[200px] sm:max-h-[260px]
                         md:max-w-[215px] md:max-h-[280px]
                         lg:max-w-[230px] lg:max-h-[300px]
                         xl:max-w-[240px] xl:max-h-[310px]
                         2xl:max-w-[250px] 2xl:max-h-[320px]`}
            style={{ backgroundColor: item.bg }}
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={160}
              height={160}
              className="w-[100px] lg:w-[160px] h-[100px] lg:h-[160px] object-contain mb-6"
            />
            <p
              className="text-[16px] leading-[22px] font-extrabold text-center w-full max-w-[160px]
                         sm:text-[17px] sm:leading-[23px]
                         md:text-[18px] md:leading-[24px]"
              style={{ color: item.color }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Femmy;