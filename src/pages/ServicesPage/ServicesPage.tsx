import React, { useContext } from "react";
import { Banner } from "../../components/Banner/Banner";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { TouchContext } from "../../helpers/TouchProvider";
import classNames from "classnames";
import { Services } from "../../components/Services/Services";

export const ServicesPage: React.FC = () => {
  const { isTouchOpen } = useContext(TouchContext);
  const imagesForBanner = [
    'images/Bathroom/1.jpg',
    'images/Bathroom/2.jpg',
    'images/Bathroom/3.jpg',
    'images/Bathroom/4.jpg',
    'images/Bathroom/5.jpg',
    'images/Bathroom/6.jpg',
    'images/Bathroom/7.jpg',
    'images/Bathroom/8.jpg',
    'images/Bathroom/9.jpg',
    'images/Bathroom/10.jpg',
  ];

  return (
    <div
      className={classNames(
        "page__main",
        { "page__main--touch": isTouchOpen },
      )}
    >
      <main className="page__main">
        <section
          className="page__section about"
          id="about-us"
          hidden={isTouchOpen}
        >
          <div className="dining__container">
            <div className="grid grid--tablet grid--dekstop">
              <div className="
          grid__item
          grid__item--tablet-1-6
          grid__item--dekstop-1-12"
              >
                <h2 className="dining__title">
                  Послуги
                </h2>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <ContactUs />
      </main>
    </div>
  );
};
