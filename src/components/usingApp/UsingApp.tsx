import React from 'react';
import { useTranslation } from 'react-i18next';

const UsingApp = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      id: 1,
      title: t('use_app.card1_title'),
      description: t('use_app.card1_text'),
      bg: '#FFE3EC',
      descriptionList: [],
    },
    {
      id: 2,
      title: t('use_app.card2_title'),
      description: t('use_app.card2_text'),
      bg: '#F5E8FF',
      descriptionList: [
        t('use_app.card2_text1'),
        t('use_app.card2_text2'),
        t('use_app.card2_text3'),
      ],
    },
    {
      id: 3,
      title: t('use_app.card3_title'),
      description: t('use_app.card3_text'),
      bg: '#E6F9F1',
      descriptionList: [],
    },
  ];

  return (
    <section className="pb-[120px] md:pb-[160px] " id="using">
      <div className="container">
        <h2 className="text-[24px] sm:text-[48px] font-bold leading-[120%] text-center mb-6 md:mb-[32px]">
          {t('use_app.title')}
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
                    <li
                      key={index}
                      className="text-[16px] leading-[150%] font-medium"
                    >
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
