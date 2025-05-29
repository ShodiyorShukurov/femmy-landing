'use client';
import Advertisement from '@/components/advertisement/Advertisement';
import BackgroundImage from '@/components/backgroundImage/BackgroundImage';
import CardInfo from '@/components/cardInfo/CardInfo';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Info from '@/components/info/Info';
import Questions from '@/components/questions/Questions';
import UsingApp from '@/components/usingApp/UsingApp';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <Image
          src="/assets/logo/loaderLogo.svg"
          alt="Loading..."
          width={260}
          height={190}
          className="w-[160px] sm:w-[260px] h-[110px] sm:h-[190px] object-contain"
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
    <>
      <Header />
      <main>
        <Hero />
        <BackgroundImage />
        <CardInfo />
        <Info />
        <UsingApp />
        <Advertisement />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Page;
