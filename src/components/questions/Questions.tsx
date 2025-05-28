'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questionData = [
  {
    id: 1,
    question: 'Femmy ilovasi nima uchun mo‘ljallangan?',
    answer:
      'Albatta. Femmy sizning shaxsiy ma’lumotlaringizni himoyalaydi va uchinchi tomonlarga uzatilmaydi.',
  },
  {
    id: 2,
    question: 'Ilova faqat hayz sikliga mo‘ljallanganmi?',
    answer:
      'Femmy ilovasi foydalanuvchilarning shaxsiy ma’lumotlarini, menstruatsiya tsikli, ovulatsiya va boshqa sog‘liq bilan bog‘liq ma’lumotlarni to‘playdi.',
  },

  {
    id: 3,
    question: 'Ilova o‘zbek tilidami?',
    answer:
      'Ha, ilova o‘zbek tilida. Siz o‘zbek tilida ma’lumotlarni kiritishingiz va ilovaning barcha funksiyalaridan foydalanishingiz mumkin.',
  },
  {
    id: 4,
    question: 'Maʼlumotlarim xavfsiz saqlanadimi?',
    answer:
      'Femmy ilovasi foydalanuvchilarning shaxsiy ma’lumotlarini, menstruatsiya tsikli, ovulatsiya va boshqa sog‘liq bilan bog‘liq ma’lumotlarni to‘playdi.',
  },
  {
    id: 5,
    question: 'Ilovani telefonimda qanday o‘rnatsam bo‘ladi?',
    answer:
      'Femmy ilovasini telefoningizga o‘rnatish uchun App Store yoki Google Play do‘konidan ilovani qidirib toping va o‘rnatish tugmasini bosing. O‘rnatish jarayoni tugagach, ilovani oching va ro‘yxatdan o‘ting.',
  },
  {
    id: 6,
    question: 'Ilovada nechta rejim mavjud?',
    answer:
      'Femmy ilovasida bir nechta rejim mavjud: menstruatsiya tsikli, ovulatsiya, homiladorlik va boshqa sog‘liq bilan bog‘liq ma’lumotlarni kuzatish uchun. Siz o‘z ehtiyojlaringizga mos ravishda rejimlarni tanlashingiz mumkin.',
  },
  {
    id: 7,
    question: 'Femmy foydalanuvchiga qanday yordam beradi?',
    answer:
      'Femmy ilovasi foydalanuvchilarga menstruatsiya tsikli, ovulatsiya, homiladorlik va boshqa sog‘liq bilan bog‘liq ma’lumotlarni kuzatish va boshqarishda yordam beradi. Ilova foydalanuvchilarga o‘z sog‘lig‘ini yaxshilash va hayot sifatini oshirish uchun zarur bo‘lgan ma’lumotlarni taqdim etadi.',
  },
];

const Questions = () => {
  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  return (
    <section className="pt-[120px] md:pt-[160px] pb-[120px]">
      <div className="container">
        <h2 className="text-[40px] sm:text-[64px] leading-[120%] font-bold sm:font-extrabold mb-8 sm:mb-12 sm:text-center">
          Eng ko’p berilgan savollar
        </h2>

        <ul className="flex flex-col gap-y-4 sm:gap-y-6">
          {questionData.map((item) => (
            <li key={item.id} className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-[19px]">
                <div className="py-4 px-5 bg-[var(--header-bg)] rounded-[32px] font-bold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] w-full sm:w-auto sm:min-w-[360px]">
                  {item.question}
                </div>
                <button
                  onClick={() =>
                    setShowAnswer(showAnswer === item.id ? null : item.id)
                  }
                  className={`${
                    showAnswer === item.id
                      ? 'bg-[var(--button-color)]'
                      : 'bg-[var(--header-bg)]'
                  } rounded-full border border-[var(--button-color)] min-w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center`}
                >
                  {showAnswer === item.id ? (
                    <Image
                      src="/assets/logo/minus.svg"
                      alt="Arrow Up"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/assets/logo/plus.svg"
                      alt="Arrow Down"
                      width={24}
                      height={24}
                    />
                  )}
                </button>
              </div>
              <AnimatePresence>
                {showAnswer === item.id && (
                  <motion.div
                    key="answer"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-medium text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] w-full flex justify-end sm:justify-center"
                  >
                    <p className="max-w-[280px] sm:max-w-[640px] py-4 px-5 bg-[#FFE3E8] rounded-[32px] ">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questions;
