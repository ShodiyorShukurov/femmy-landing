'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Questions = () => {
  const { t } = useTranslation();

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

  const questionData = [
    {
      id: 1,
      question: t('questions.question1.title'),
      answer: t('questions.question1.text'),
      isView: false,
    },
    {
      id: 2,
      question: t('questions.question2.title'),
      answer: t('questions.question2.text'),
      isView: false,
    },

    {
      id: 3,
      question: t('questions.question3.title'),
      answer: t('questions.question3.text'),
      isView: false,
    },
    {
      id: 4,
      question: t('questions.question4.title'),
      answer: t('questions.question4.text'),
      isView: false,
    },
    {
      id: 5,
      question: t('questions.question5.title'),
      answer: t('questions.question5.text'),
      isView: false,
    },
    {
      id: 6,
      question: t('questions.question6.title'),
      answer: t('questions.question6.text'),
      isView: false,
    },
    {
      id: 7,
      question: t('questions.question7.title'),
      answer: t('questions.question7.text'),
      isView: false,
    },
  ];

  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [questionArr, setQuestionArr] = useState(questionData);

  useEffect(() => {
    setQuestionArr(questionData);
  }, [t]);

  const toggleView = (id: number) => {
    setQuestionArr((prev) =>
      prev.map((item) =>
        item.id === id && !item.isView
          ? { ...item, isView: !item.isView }
          : item
      )
    );
  };

  return (
    <section className="pt-[120px] md:pt-[160px] pb-[120px]" id="question">
      <div className="container">
        <h2 className="text-[40px] sm:text-[64px] leading-[120%] font-bold sm:font-extrabold mb-8 sm:mb-12 sm:text-center">
          {t('questions.title')}
        </h2>

        <ul className="flex flex-col gap-y-4 sm:gap-y-6">
          {questionArr.map((item) => (
            <li key={item.id} className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-[19px]">
                <div
                  className={`py-4 px-5 ${
                    item.isView ? 'bg-[#FFF1F3]' : 'bg-[var(--header-bg)]'
                  } rounded-[32px] font-bold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] w-full sm:w-auto sm:min-w-[360px]`}
                >
                  {item.question}
                </div>
                <button
                  onClick={() => {
                    setShowAnswer(showAnswer === item.id ? null : item.id);
                    if (showAnswer == item.id) {
                      toggleView(item.id);
                    }
                  }}
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
