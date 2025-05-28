import Advertisement from '@/components/advertisement/Advertisement';
import BackgroundImage from '@/components/backgroundImage/BackgroundImage';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Questions from '@/components/questions/Questions';
import UsingApp from '@/components/usingApp/UsingApp';
import React from 'react';

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BackgroundImage/>
        <UsingApp />
        <Advertisement />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default Page;
