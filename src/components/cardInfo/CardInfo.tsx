'use client';
import Lottie from 'lottie-react';
import Image from 'next/image';
import React from 'react';
import ginekologAiAnimation from '@/animationData/Ginekolog-Ai.json';
import { useTranslation } from 'react-i18next';

const CardInfo = () => {

  const {t}= useTranslation()

  return (
    <section className="pb-[160px]" id="function">
      <div className="container">
        <h2 className="text-[40px] sm:text-[64px] leading-[120%] font-extrabold text-center w-full max-w-[760px] mx-auto mb-[32px] sm:mb-[48px]">
          {t('card_info.title')}
        </h2>

        <div className="flex flex-col xd:flex-row justify-center items-center gap-y-4 xd:gap-y-0 xd:gap-x-6">
          {/* Cards 1 start */}

          <ul className="flex xd:flex-col gap-x-4 xd:gap-y-6">
            <li className="p-4 sm:p-6 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px] flex flex-col items-center justify-between">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold w-full max-w-[200px] sm:max-w-[250px] text-center">
                {t('card_info.card_title1')}
              </h4>
              <Image
                src="/assets/calendar.png"
                alt="Hayz va ovulyatsiya trekeri"
                width={250}
                height={315}
                className="w-full max-w-[130px] sm:max-w-[250px] h-full max-h-[130px] sm:max-h-[315px] mt-[5px] rounded-[16px]"
              />
            </li>
            <li className="p-4 sm:p-6 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px] flex flex-col items-center justify-between">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold text-center">
                {t('card_info.card_title2')}
              </h4>
              <Image
                src="/assets/note.png"
                alt="Hayz va ovulyatsiya trekeri"
                width={250}
                height={250}
                className="w-full max-w-[130px] sm:max-w-[250px] h-full max-h-[130px] sm:max-h-[250px] mt-[5px] rounded-[16px]"
              />
            </li>
          </ul>
          {/* Cards 1 end */}

          {/* Cards 2 start */}
          <ul className="flex flex-col gap-y-6">
            <li className="p-8 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold text-center">
                {t('card_info.card_title3')}
              </h4>
              <Lottie
                animationData={ginekologAiAnimation}
                loop={true}
                className="w-full max-w-[360px] lg:h-[510px] mt-[5px]"
              />
            </li>

            <li className="p-6 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px]">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold text-center">
                {t('card_info.card_title4')}
              </h4>
              <Image
                src="/assets/lock.png"
                alt="Shaxsiy maslahatlar"
                width={195}
                height={120}
                className="w-full max-w-[180px] sm:w-[195px] h-full max-h-[110px] sm:max-h-[120px] mt-[5px] rounded-[16px] mx-auto"
              />
            </li>
          </ul>
          {/* Cards 2 end */}

          {/* Cards 3 start */}
          <ul className="flex xd:flex-col gap-x-4 xd:gap-y-6">
            <li className="p-4 sm:p-6 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px] flex flex-col items-center justify-between">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold text-center">
                {t('card_info.card_title5')}
              </h4>
              <Image
                src="/assets/woman.png"
                alt="Homiladorlik rejimi"
                width={250}
                height={260}
                className="w-full max-w-[130px] sm:max-w-[250px] h-full max-h-[130px] sm:max-h-[260px] mt-[5px] rounded-[16px]"
              />
            </li>
            <li className="p-4 sm:p-6 bg-[#FFE3E8] rounded-[24px] sm:rounded-[32px] flex flex-col items-center justify-between">
              <h4 className="text-[18px] sm:text-[24px] leading-[24px] sm:leading-[32px] font-bold text-center">
                {t('card_info.card_title6')}
              </h4>
              <Image
                src="/assets/book.png"
                alt="Foydali maqolalar"
                width={250}
                height={360}
                className="w-full max-w-[130px] sm:max-w-[250px] h-full max-h-[130px] sm:max-h-[360px] mt-[5px] rounded-[16px]"
              />
            </li>
          </ul>
          {/* Cards 3 end */}
        </div>
      </div>
    </section>
  );
};

export default CardInfo;
