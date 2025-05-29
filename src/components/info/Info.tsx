'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const logoRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        y: '50vh',
        yPercent: -10,
        scale: 3,
      },
      {
        y: '25vh',
        scale: 1,
        yPercent: 50,
        scrollTrigger: {
        trigger: logoRef.current,
        start: 'top top',
        end: '+=300', // qancha masofa pin bo‘lishi kerakligini belgilaydi
        scrub: true,
        pin: true,
      },
      }
    );

    // Cardlar pastdan chiqishi
    cardRefs.current.forEach((card) => {
    if (!card) return;
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });
  }, []);

  return (
    <section className="pb-[160px] relative h-screen">
      <div className="container flex flex-col items-center justify-center overflow-hidden">
        <h2
          // ref={logoRef}
          className="text-[48px] leading-[120%] font-bold text-center mb-[32px]"
        >
          Femmy kimlar uchun
        </h2>

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
            className={`flex items-center rounded-[48px] px-[32px] py-[16px] w-full sm:w-auto ${index ==1 && "my-8"}`}
            style={{ backgroundColor: item.bg }}
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={58}
              height={58}
              className="w-[48px] sm:w-[58px] h-[48px] sm:h-[58px] mr-[10px]"
            />
            <p className="text-[24px] sm:text-[48px] leading-[120%] font-extrabold sm:text-center text-[var(--button-color)]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
