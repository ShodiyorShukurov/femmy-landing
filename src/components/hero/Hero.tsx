import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='pt-[100px] md:pt-[160px] pb-[64px] md:pb-[120px]'>
      <div className="container text-center">
        <div className="flex items-end flex-col xd:flex-row w-full">
          {/* 900px dan keyin chiqadi */}
          <div className="flex xd:hidden justify-between w-full">
            <Image
              className="moveArrow  w-[70px] sm:w-[170px] h-[80px] sm:h-[200px]"
              src="/assets/hero-img1.png"
              alt="“3D isometric illustration showing a modern mobile phone screen with floating UI cards around it. Each card represents features like period tracking (calendar with heart), pregnancy mode (pregnant woman), useful artic"
              width={170}
              height={200}
            />
            <Image
              className="moveArrow1 w-[70px] sm:w-[170px] h-[80px] sm:h-[200px]"
              src="/assets/hero-img2.png"
              alt="“3D isometric illustration showing a modern mobile phone screen with floating UI cards around it. Each card represents features like period tracking (calendar with heart), pregnancy mode (pregnant woman), useful artic"
              width={170}
              height={200}
            />
          </div>

          {/* 900px dan oldin chiqadi */}
          <Image
            className="moveArrow xd:block hidden"
            src="/assets/hero-img1.png"
            alt="“3D isometric illustration showing a modern mobile phone screen with floating UI cards around it. Each card represents features like period tracking (calendar with heart), pregnancy mode (pregnant woman), useful artic"
            width={170}
            height={200}
          />

          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[120%] w-full mt-[20px] xd:mt-0">
            Femmy — AI Ginekolog
            <span className="block text-[24px] md:text-[48px] lg:text-[64px] leading-[100%] md:leading-[120%] font-semibold lg:font-extrabold">
              Sog’lom ayollik uchun!
            </span>
          </h1>

          {/* 900px dan oldin chiqadi */}
          <Image
            className="moveArrow1 xd:block hidden"
            src="/assets/hero-img2.png"
            alt="3D isometric illustration of a smartphone in the center, surrounded by floating cards representing Femmy app features_ a heart on a calendar (period tracking), a pregnant woman icon (pregnancy mode), an open book with"
            width={170}
            height={200}
          />
        </div>

        <div className="mt-[32px] sm:mt-[64px] flex flex-col-reverse sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-4 w-full">
          <button className="px-6 py-4 sm:py-[18px] border border-[var(--button-color)] text-[var(--button-color)] text-[16px] leading-[120%] font-bold rounded-[48px] flex items-center justify-center cursor-pointer w-full sm:w-auto">
            <Image
              src="/assets/logo/google-play.svg"
              alt="Google Play"
              width={17}
              height={17}
            />
            <span className="ml-2.5">Android uchun yuklab olish</span>
          </button>

          <button className="px-6 py-4 sm:py-[18px] bg-[var(--button-color)] text-[var(--header-bg)] text-[16px] leading-[120%] font-bold rounded-[48px] flex items-center justify-center cursor-pointer w-full sm:w-auto">
            <Image
              src="/assets/logo/ios.svg"
              alt="Google Play"
              width={17}
              height={17}
            />
            <span className="ml-2.5">iOS uchun yuklab olish</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
