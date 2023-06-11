import React, { useContext } from 'react';
import './About.scss';

import { TouchContext } from '../../helpers/TouchProvider';

export const About: React.FC = () => {
  const { isTouchOpen } = useContext(TouchContext);

  return (
    <section
      className="page__section about"
      id="about-us"
      hidden={isTouchOpen}
    >
      <div className="about__container">
        <div className="grid grid--tablet grid--dekstop">
          <div className="
            grid__item
            grid__item--tablet-1-3
            grid__item--dekstop-1-5"
          >
            <div className="about__banner">
              <h2 className="about__title">
                Доставка авто з Норвегії та Європи
              </h2>


              <div className="about__link-container">
                <a href="#news" className="about__link">За доступними цінами</a>
              </div>

              <div className="about__link-container">
                <a href="#news" className="about__link">Послуги евакуатора</a>
              </div>
            </div>

          </div>
          <button className="
            about__button
            grid__item--tablet-1-3
            grid__item--dekstop-2-4
          ">
            Детальніше
          </button>
        </div>
      </div>
    </section>
  );
};
