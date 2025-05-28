import React from 'react';

const UsingApp = () => {
  const cardData = [
    {
      id: 1,
      title: 'Femmy’ni App Store yoki Play Market’dan yuklab oling.',
      description:
        'Ilovani ochganingizdan so‘ng sizdan profil yaratish yoki anonim rejimda foydalanish taklif qilinadi. Foydalanuvchilar istasa, hech qanday ro‘yxatdan o‘tmasdan ham foydalanishni boshlashlari mumkin.',
      bg: '#FFE3EC',
      descriptionList:[]
    },
    {
      id: 2,
      title: 'Oylik sikl, homiladorlik yoki onalik holatini tanlang.',
      description:
        'So’glig’ingizda oid ma’lumotlarni kiriting. Femmy ilovasi orqali o’zingizga mos rejimni tanlashingiz mumkin:',
      bg: '#F5E8FF',
      descriptionList: [
        'Hayz kuzatuvi',
        'Homiladorlik yo‘li',
        'Onalikdan keyingi parvarish',
      ],
    },
    {
      id: 3,
      title: 'Femmy siz uchun ishlaydi.',
      description:
        'Sizning tanlangan rejimingizga asoslanib ilova sog‘lig‘ingizni kuzatib boradi, tibbiy eslatmalar yuboradi va Ginekolog AI yordamida individual maslahatlar olishingiz mumkin. Har kuni Ginekolog AI orqali o’zingizda kuzatilayotgan muammolarga javob topishingiz mumkin.',
      bg: '#E6F9F1',
      descriptionList:[]
    },
  ];

  return (
    <section className="pb-[120px] md:pb-[160px] ">
      <div className="container">
        <h2 className="text-[24px] sm:text-[48px] font-bold leading-[120%] text-center mb-6 md:mb-[32px]">
          Ilovadan foydalanish
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 rounded-[24px]">
          {cardData.map((card) => (
            <li
              key={card.id}
              className="p-6 sm:p-[32px] flex flex-col justify-between rounded-[24px]"
              style={{ backgroundColor: card.bg }}
            >
              <h3 className="text-[20px] sm:text-[24px] text-[#EB2D69] leading-[120%] font-bold  mb-2">
                {card.title}
              </h3>
              <p className="text-[16px] leading-[150%] font-medium">
                {card.description}
              </p>
                {card.descriptionList.length > 0 && (
                    <ul className="list-disc pl-6">
                    {card.descriptionList.map((item, index) => (
                        <li key={index} className="text-[16px] leading-[150%] font-medium">
                        {item}
                        </li>
                    ))}
                    </ul>
                )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UsingApp;
