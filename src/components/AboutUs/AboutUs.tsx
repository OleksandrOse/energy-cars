import React, { useContext } from 'react';
import './AboutUs.scss';

import { TouchContext } from '../../helpers/TouchProvider';

export const AboutUs: React.FC = () => {
  const { isTouchOpen } = useContext(TouchContext);

  return (
    <section
      className="page__section about-us"
      id="about-us"
      hidden={isTouchOpen}
    >
      <div className="about-us__container">
        <div className="grid grid--tablet grid--dekstop">
          <div className="
            grid__item
            grid__item--tablet-1-3
            grid__item--dekstop-1-5"
          >
            <div className="about-us__banner">
              <a
                href="#"
                className="about-us__photo"
              >
              </a>
            </div>
            <h2 className="about-us__title">
              Про компанію
            </h2>
          </div>

          <div className="
            grid__item
            grid__item--tablet-4-6
            grid__item--dekstop-7-12"
          >
            <p className="about-us__paragraf">
              Компанія Energy Cars вже протягом багато років надає повний комплекс послуг з підбору, придбання, доставки та розмитнення автомобілів з Норвегії та Європи.
            </p>

            <p className="about-us__paragraf">
              На нашому рахунку тисячі привезених авто для українців, які обрали вигідний спосіб придбання автомобіля. Наша компанія надає пакет послуг «під ключ» – це значить, що ми не тільки доставимо та розмитнимо авто для Вас, а також здійснимо сертифікацію і постановку на облік в Україні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
