import Image from 'next/image';
import React from 'react';

const Femmy = () => {
  return (
    <section className="pb-[160px] relative">
      <div className="container flex flex-col items-center justify-center h-[120vh] ">
        <h2 className="text-[80px] leading-[120%] font-extrabold text-center text-[var(--button-color)] w-full max-w-[840px] ">
          Femmy siz uchun nimalar qiladi?
        </h2>

        {/* Card 1 start */}
        <div className="absolute top-[280px] left-[80px] flex flex-col items-center justify-between p-6 bg-[#FFF8EB] rounded-[24px]">
          <p className="text-[18px] leading-[24px] font-extrabold text-center text-[#CF3666] w-full max-w-[160px] mb-[10px]">
            Hayz va ovulyatsiya trekeri
          </p>
          <Image
            src="/assets/logo/femmy-card1.svg"
            alt="Hayz va ovulyatsiya trekeri"
            width={160}
            height={160}
            className="w-[300px] sm:w-[160px] h-[300px] sm:h-[160px] object-contain mb-6"
          />
        </div>

        {/* Card 1 end */}

        {/* Card 2 start */}
        <div className="absolute top-[10px] left-[35%] flex flex-col items-center justify-between p-6 bg-[#FFEAE6] rounded-[24px]">
          <Image
            src="/assets/logo/femmy-card2.svg"
            alt="Foydali maqolalar"
            width={140}
            height={140}
            className="w-[300px] sm:w-[140px] h-[300px] sm:h-[140px] object-contain mb-6"
          />
          <p className="text-[18px] leading-[24px] font-extrabold text-center text-[#EB497C] w-full max-w-[140px] mt-[10px]">
            Foydali maqolalar
          </p>
        </div>
        {/* Card 2 end */}

        {/* Card 3 start */}

        <div className="absolute top-[100px] right-[80px] flex flex-col items-center justify-between p-6 bg-[#FFE8FD] rounded-[24px]">
          <Image
            src="/assets/logo/femmy-card3.svg"
            alt="Homiladolik rejimi"
            width={140}
            height={140}
            className="w-[300px] sm:w-[140px] h-[300px] sm:h-[140px] object-contain mb-6"
          />
          <p className="text-[18px] leading-[24px] font-extrabold text-center text-[#C55EBD] w-full max-w-[140px] mt-[10px]">
            Homiladolik rejimi
          </p>
        </div>
        {/* Card 3 end */}

        {/* Card 4 start */}
        <div className="absolute bottom-[100px] left-[20%] flex flex-col items-center justify-between p-6 bg-[#FFE3E8] rounded-[24px]">
          <Image
            src="/assets/logo/femmy-card4.svg"
            alt="Foydalanuvchi maxfiyligi"
            width={150}
            height={150}
            className="w-[300px] sm:w-[150px] h-[300px] sm:h-[150px] object-contain mb-6"
          />
          <p className="text-[18px] leading-[24px] font-extrabold text-center text-[#D4041F] w-full max-w-[140px] mt-[10px]">
            Foydalanuvchi maxfiyligi
          </p>
        </div>
        {/* Card 4 end */}

        {/* Card 5 start */}
        <div className="absolute bottom-[100px] right-[15%] flex flex-col items-center justify-between p-6 bg-[#FFF1F3] rounded-[24px]">
          <Image
            src="/assets/logo/femmy-card5.svg"
            alt="Shaxsiy eslatmalar"
            width={150}
            height={150}
            className="w-[300px] sm:w-[150px] h-[300px] sm:h-[150px] object-contain mb-6"
          />
          <p className="text-[18px] leading-[24px] font-extrabold text-center text-[#D11D56] w-full max-w-[140px] mt-[10px]">
            Shaxsiy eslatmalar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Femmy;
