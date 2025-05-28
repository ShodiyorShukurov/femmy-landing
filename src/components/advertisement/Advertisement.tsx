import Image from 'next/image';
import React from 'react';

const Advertisement = () => {
  return (
    <section className="h-screen bg-[var(--header-bg)] flex items-center justify-center">
      <div className="container">
        <h2 className="text-[40px] md:text-[80px] leading-[120%] text-[var(--button-color)] font-bold text-center">
          1,5 ming foydalanuvchilar hamda Siz
        </h2>
        <p className="text-[16px] sm:text-[24px] leading-[120%] text-[var(--button-color)] font-semibold text-center mb-[64px]">
          Boshlash uchun bir necha soniya kifoya
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-4 w-full">
          <button className="px-6 py-4 sm:py-[18px] border border-[var(--button-color)] text-[var(--button-color)] text-[16px] leading-[120%] font-bold rounded-[48px] flex items-center justify-center cursor-pointer w-full sm:w-auto">
            <Image
              src="/assets/logo/ios2.svg"
              alt="App Store"
              width={17}
              height={17}
            />
            <span className="ml-2">iOS uchun yuklab olish</span>
          </button>

          <button className="px-6 py-4 sm:py-[18px] border border-[var(--button-color)] text-[var(--button-color)] text-[16px] leading-[120%] font-bold rounded-[48px] flex items-center justify-center cursor-pointer w-full sm:w-auto">
            <Image
              src="/assets/logo/google-play.svg"
              alt="Google Play"
              width={17}
              height={17}
            />
            <span className="ml-2">Android uchun yuklab olish</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
