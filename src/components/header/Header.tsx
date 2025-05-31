// src/components/Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react'; // useMemo qo'shildi
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// languageData ni komponentdan tashqariga chiqaramiz
// Bu uni har renderda qayta yaratilishining oldini oladi
const ALL_LANGUAGES = [
  { code: 'uz', label: 'Uz' },
  { code: 'ru', label: 'Ru' },
  { code: 'en', label: 'En' },
];

const Header = () => {
  const { t, i18n } = useTranslation();

  // Joriy tilning labelini saqlash uchun holat
  // Boshlang'ich holatni i18n.language dan olishga harakat qilamiz
  // Agar i18n.language mavjud bo'lmasa, 'Uz' ni default qilib qo'yamiz
  const [currentLanguageLabel, setCurrentLanguageLabel] = useState(() => {
    if (typeof window !== 'undefined' && i18n.language) {
      return ALL_LANGUAGES.find(lang => lang.code === i18n.language)?.label || 'Uz';
    }
    return 'Uz';
  });

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bu useEffect faqat i18n.language o'zgarganda ishlaydi
  useEffect(() => {
    const label = ALL_LANGUAGES.find(lang => lang.code === i18n.language)?.label || 'Uz';
    if (currentLanguageLabel !== label) { // Faqat agar label o'zgargan bo'lsa yangila
      setCurrentLanguageLabel(label);
    }
  }, [i18n.language, currentLanguageLabel]); // currentLanguageLabel ni ham dependency ga qo'shish shart

  // Tilni almashtirish funksiyasi
  const handleLanguageSelect = (code: string) => {
    setIsLanguageOpen(false); // Dropdownni yopish
    localStorage.setItem('selectedLanguage', code); // Tilni localStorage ga saqlash
    i18n.changeLanguage(code); // i18next tilini o'zgartirish
    // setCurrentLanguageLabel yuqoridagi useEffect orqali avtomatik yangilanadi
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <header className="fixed top-[16px] sd:top-[24px] left-0 right-0 z-50 container">
        <div
          className="bg-[#FFFFFF29] rounded-[32px] backdrop-blur-[24px]"
          style={{
            boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div className="flex justify-between items-center py-2 sm:py-[10px] px-4">
            <Link href="/">
              <Image
                src="/assets/logo/femmy_logo.svg"
                alt="Femmy Logo"
                width={120}
                height={35}
                style={{ width: '120px', height: 'auto' }}
              />
            </Link>

            <nav className="hidden xs:block" aria-label="Main navigation">
              <ul className="flex items-center gap-x-6 text-[var(--secondary-text-color)] text-[16px] leading-[100%] font-semibold">
                <li>
                  <Link href="#">{t('header.path1')}</Link>
                </li>
                <li>
                  <Link href="#function">{t('header.path2')}</Link>
                </li>
                <li>
                  <Link href="#using">{t('header.path3')}</Link>
                </li>
                <li>
                  <Link href="#question">{t('header.path4')}</Link>
                </li>
              </ul>
            </nav>

            <div className="hidden xs:flex items-center gap-x-4">
              <div className="relative">
                <button
                  className={`px-4 py-2 text-[16px] leading-[150%] font-bold ${
                    isLanguageOpen
                      ? 'bg-[var(--button-color)] text-[var(--button-text-color)]'
                      : 'border border-button-color text-[var(--button-color)] bg-[var(--header-bg)]'
                  } rounded-[24px] cursor-pointer`}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  aria-label="Tilni o‘zgartirish"
                >
                  {currentLanguageLabel}
                </button>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      key="language-dropdown"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="absolute top-[50px] right-0 mt-2 flex flex-col gap-y-[6px] z-50"
                    >
                      {ALL_LANGUAGES.map((lang) => ( // ALL_LANGUAGES dan foydalanamiz
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className="px-4 py-2 text-[var(--button-color)] bg-[var(--header-bg)] text-[16px] leading-[150%] font-bold border border-button-color rounded-[24px] cursor-pointer"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="px-4 py-2 text-[var(--button-text-color)] bg-[var(--button-color)] rounded-[24px] font-bold cursor-pointer">
                <Link href="#download">{t('header.button_text')}</Link>
              </button>
            </div>

            <button
              className="block xs:hidden px-4 py-2 text-[var(--button-color)] border border-button-color rounded-[24px]"
              onClick={() => setIsMenuOpen(true)}
            >
              <Image
                className="cursor-pointer"
                src="/assets/logo/menu.svg"
                alt="Menu Icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <AnimatePresence>
          <motion.nav
            key="mobile-menu"
            aria-label="Mobil navigatsiya"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed h-full top-0 left-0 right-0 bg-[#FFE3E8] z-50 xs:hidden backdrop-blur-[48px] container"
          >
            <div className="flex justify-between pt-[24px]">
              <Link href="/">
                <Image
                  src="/assets/logo/femmy_logo.svg"
                  alt="Femmy Logo"
                  width={120}
                  height={35}
                />
              </Link>

              <div className="flex items-center gap-x-4">
                <div className="relative">
                  <button
                    className={`px-4 py-2 text-[16px] leading-[150%] font-bold ${
                      isLanguageOpen
                        ? 'bg-[var(--button-color)] text-[var(--button-text-color)]'
                        : 'bg-[var(--header-bg)] border border-button-color text-[var(--button-color)]'
                    } rounded-[24px] cursor-pointer`}
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    aria-label="Tilni o‘zgartirish"
                  >
                    {currentLanguageLabel}
                  </button>
                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        key="language-dropdown"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-[50px] right-0 mt-2 flex flex-col gap-y-[6px] z-50"
                      >
                        {ALL_LANGUAGES.map((lang) => ( // ALL_LANGUAGES dan foydalanamiz
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang.code)}
                            className="px-4 py-2 text-[var(--button-color)] bg-[var(--header-bg)] text-[16px] leading-[150%] font-bold border border-button-color rounded-[24px] cursor-pointer"
                          >
                            {lang.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  className="px-4 py-2 bg-[var(--header-bg)] border border-[var(--button-color)] rounded-[24px] cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    className="cursor-pointer"
                    src="/assets/logo/close.svg"
                    alt="Close Icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center h-full gap-y-8">
              <ul className="flex flex-col justify-center items-center gap-y-6 text-[24px] leading-[100%] font-semibold text-[var(--secondary-text-color)]">
                <li>
                  <Link href="#">
                  {t('header.path1')}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                  {t('header.path2')}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                  {t('header.path3')}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                  {t('header.path4')}
                  </Link>
                </li>
              </ul>

              <div className="flex justify-center items-center gap-x-[16px]">
                <Link href={'#'}>
                  <Image
                    src="/assets/logo/instagram.svg"
                    alt="instagram Icon"
                    width={48}
                    height={48}
                  />
                </Link>

                <Link href={'#'}>
                  <Image
                    src="/assets/logo/telegram.svg"
                    alt="telegram Icon"
                    width={48}
                    height={48}
                  />
                </Link>
              </div>
            </div>
          </motion.nav>
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;