'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Femmy = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3500', // Umumiy animatsiya davomiyligi uchun etarli masofani belgilaymiz, biroz oshirildi
          scrub: true,
          pin: true,
        },
      });

      // 1. Sarlavha kirib keladi
      tl.fromTo(
        titleRef.current,
        { scale: 2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );

      // Kartalar sarlavha bilan birga ko'rinishga keladi, lekin o'z joyida turadi
      cardRefs.current.forEach((card) => {
        if (card) {
          tl.fromTo(
            card,
            { opacity: 0 }, // Dastlab ko'rinmaydi
            { opacity: 1, duration: 0.5 }, // Sarlavha bilan birga ko'rinishga keladi
            0 // Timeline boshiga bog'lash uchun 0 pozitsiya (yoki "<")
          );
        }
      });

      // Sarlavha kichrayib yuqoriga ketadi
      tl.to(
        titleRef.current,
        {
          scale: 0.5,
          opacity: 0,
          y: -100,
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '+=0.5' // Sarlavha kirishidan 0.5s keyin boshlanadi
      );

      // Sarlavha butunlay yo'qolgandan keyin kartalar harakati boshlanishi uchun label qo'shamiz.
      // Bu kartalar harakatini sarlavha animatsiyasi tugaganidan so'ng boshlaydi.
      tl.addLabel('cardsStartMovement');

      cardRefs.current.forEach((card, index) => {
        if (card) {
          tl.to(
            card,
            {
              left: '50%',
              top: '50%',
              xPercent: -50,
              yPercent: -50,
              scale: 1,
              zIndex: 10 + index,
              ease: 'power2.out',
              duration: 1.5, 
            },
            'cardsStartMovement' // Bu tween 'cardsStartMovement' labelida boshlanadi
          ).to(
            card,
            {
              opacity: 0,
              y: '-=100', // Yuqoriga biroz surilib yo'qoladi
              duration: 0.8, // Kartalar yo'qolish vaqti
              ease: 'power1.in',
            },
            'cardsStartMovement+=1.2' // Kartalar markazga harakatlana boshlagandan 1.2 soniya o'tib yo'qola boshlaydi
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-[160px] relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center h-[120vh]">
        <h2
          ref={titleRef}
          className="text-[80px] leading-[120%] font-extrabold text-center text-[var(--button-color)] w-full max-w-[840px] z-20"
        >
          Femmy siz uchun nimalar qiladi?
        </h2>
        {[
          {
            pos: 'top-[180px] left-[80px]',
            bg: '#FFF8EB',
            text: 'Hayz va ovulyatsiya trekeri',
            icon: '/assets/logo/femmy-card1.svg',
            color: '#CF3666',
          },
          {
            pos: 'top-[10px] left-[35%]',
            bg: '#FFEAE6',
            text: 'Foydali maqolalar',
            icon: '/assets/logo/femmy-card2.svg',
            color: '#EB497C',
          },
          {
            pos: 'top-[100px] right-[80px]',
            bg: '#FFE8FD',
            text: 'Homiladolik rejimi',
            icon: '/assets/logo/femmy-card3.svg',
            color: '#C55EBD',
          },
          {
            pos: 'bottom-[100px] left-[20%]',
            bg: '#FFE3E8',
            text: 'Foydalanuvchi maxfiyligi',
            icon: '/assets/logo/femmy-card4.svg',
            color: '#D4041F',
          },
          {
            pos: 'bottom-[100px] right-[15%]',
            bg: '#FFF1F3',
            text: 'Shaxsiy eslatmalar',
            icon: '/assets/logo/femmy-card5.svg',
            color: '#D11D56',
          },
        ].map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`absolute ${item.pos} flex flex-col items-center justify-between p-6 rounded-[24px] opacity-0`}
            style={{ backgroundColor: item.bg }}
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={160}
              height={160}
              className="w-[160px] h-[160px] object-contain mb-6"
            />
            <p
              className="text-[18px] leading-[24px] font-extrabold text-center w-full max-w-[160px]"
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