'use client';
import React from 'react';
import Lottie from 'lottie-react';
import fullAnimation from '@/animationData/full-animation.json';
import Image from 'next/image';

const BackgroundImage = () => {
  return (
    <section className=" pb-[160px]">
      <div className="container">
        <div className="bg-[url('/assets/femmy-bg.png')] bg-cover bg-no-repeat bg-center h-[280px] sd:h-[400px] md:h-[600px] lg:h-[800px] w-full sd:max-w-[660px] lg:max-w-[960px] mx-auto flex items-center justify-center relative perspective-wrapper rounded-[32px] md:rounded-[80px]">
          <Lottie
            animationData={fullAnimation}
            loop={true}
            className="w-[320px] h-[250px]  sd:h-[350px] md:h-[450px] lg:h-[650px]"
          />
          {/* Left imgs start */}
          <Image
            src="/assets/logo/bg-icon1.svg"
            alt="Icon 1"
            className="absolute top-[50%] md:top-[330px] left-[20%] sd:left-[15%] w-[28px] sd:w-[50px] md:w-[78px] h-[28px] sd:h-[50px] md:h-[78px] z-40 blur-[1px] moveArrowZ"
            width={78}
            height={78}
          />

          <Image
            src="/assets/logo/bg-icon2.svg"
            alt="Icon 2"
            className="absolute top-[24px] md:top-[48px] left-[24px] md:left-[48px] w-[18px] sd:w-[28px] md:w-[48px] h-[18px] sd:h-[28px] md:h-[48px] z-40 blur-[1px] md:blur-[3px] moveArrowZ"
            width={48}
            height={48}
          />

          <Image
            src="/assets/logo/bg-icon3.svg"
            alt="Icon 3"
            className="absolute top-[80px] sd:top-[100px] md:top-[162px] left-[45px] sd:left-[64px] w-[36px] sd:w-[40px] md:w-[64px] h-[30px] md:h-[45px]  opacity-60 z-40 blur-[0.5px] sd:blur-[2px] moveArrowZ"
            width={64}
            height={45}
          />

          {/*Left imgs end  */}

          {/* Right imgs start */}
          <Image
            src="/assets/logo/bg-icon4.svg"
            alt="Icon 1"
            className="absolute top-[50%] md:top-[330px] right-[20%] sd:right-[15%] w-[28px] sd:w-[50px] md:w-[78px] h-[28px] sd:h-[50px] md:h-[78px] z-40 blur-[1px] moveArrowZ"
            width={78}
            height={78}
          />

          <Image
            src="/assets/logo/bg-icon6.svg"
            alt="Icon 2"
            className="absolute top-[24px] md:top-[48px] right-[24px] md:right-[48px] w-[18px] sd:w-[28px] md:w-[48px] h-[18px] sd:h-[28px] md:h-[48px] z-40 blur-[1px] md:blur-[3px] moveArrowZ"
            width={48}
            height={48}
          />

          <Image
            src="/assets/logo/bg-icon5.svg"
            alt="Icon 3"
            className="absolute top-[80px] sd:top-[100px] md:top-[162px] right-[47px] sd:right-[64px] w-[36px] sd:w-[40px] md:w-[64px] h-[30px] md:h-[45px] opacity-60 z-40 blur-[0.5px] md:blur-[2px] moveArrowZ"
            width={64}
            height={45}
          />
          {/*Right imgs end  */}
        </div>
      </div>
    </section>
  );
};

export default BackgroundImage;
