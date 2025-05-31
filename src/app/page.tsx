'use client';
import Advertisement from '@/components/advertisement/Advertisement';
import BackgroundImage from '@/components/backgroundImage/BackgroundImage';
import CardInfo from '@/components/cardInfo/CardInfo';
import Femmy from '@/components/femmy/Femmy';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Info from '@/components/info/Info';
import Questions from '@/components/questions/Questions';
import UsingApp from '@/components/usingApp/UsingApp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import i18n from '@/i18n/i18n'; 
import { I18nextProvider } from 'react-i18next';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < 90) {
        setProgress(current);
      }
    }, 30);

    const handleLoad = () => {
      clearInterval(interval);
      
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };

    // Faqat barcha rasm/style/script yuklangandan keyin
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 bg-white">
        <Image
          src="/assets/logo/loaderLogo.svg"
          alt="Loading..."
          width={260}
          height={190}
          className="w-[160px] sm:w-[260px] h-[110px] sm:h-[190px] object-contain"
          priority={false}
        />
        <div className="w-full max-w-md mt-6">
          <div className="flex justify-between mb-2 text-[16px] leading-[24px] text-[#3D3D3D]">
            <span>Yuklanmoqda...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-[#FFF1F3] rounded-full h-3">
            <div
              className="bg-[var(--button-color)] h-3 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main>
        <Hero />
        <BackgroundImage />
        <Femmy />
        <CardInfo />
        <Info />
        <UsingApp />
        <Advertisement />
        <Questions />
      </main>
      <Footer />
    </I18nextProvider>
  );
};

export default Page;
