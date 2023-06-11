import React from 'react';
import './Services.scss';

export const Services: React.FC = () => {

  return (
    <section className="page__section services" id="services">
      <div className="services__container">
        <h2 className="page__section-title">
          Наші послуги
        </h2>

        <div className="services__service service">
          <div className="service__photos">
            <div className="grid">
              <div className="
              grid__item
              grid__item--tablet-1-2
              grid__item--dekstop-1-4
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--prugin"
                  >
                  </a>
                </div>
              </div>

              <div className="
              grid__item
              grid__item--tablet-3-4
              grid__item--dekstop-5-8
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--rozmutn"
                  >

                  </a>
                </div>
              </div>

              <div className="
              grid__item
              grid__item--tablet-5-6
              grid__item--dekstop-9-12
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--logistic"
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services__service service">
          <div className="service__photos">
            <div className="grid">
              <div className="
              grid__item
              grid__item--tablet-1-3
              grid__item--dekstop-1-6
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--perevez"
                  >

                  </a>
                </div>
              </div>

              <div className="
              grid__item
              grid__item--tablet-4-6
              grid__item--dekstop-7-12
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--perevez"
                  >

                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>


        <div className="services__service service">
          <div className="service__photos">
            <div className="grid">
              <div className="
              grid__item
              grid__item--tablet-1-3
              grid__item--dekstop-1-6
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--sell"
                  >
                  </a>
                </div>
              </div>

              <div className="
              grid__item
              grid__item--tablet-4-6
              grid__item--dekstop-7-12
            ">
                <div className="service__photo-container">
                  <a
                    href="#"
                    className="service__photo service__photo--strahuv"
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
