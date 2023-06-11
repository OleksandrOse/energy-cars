import { useContext } from 'react';
import { Banner } from "../../components/Banner/Banner";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { TouchContext } from '../../helpers/TouchProvider';
import classNames from 'classnames';
import { AboutUs } from '../../components/AboutUs/AboutUs';

export const AboutPage = () => {
  const { isTouchOpen } = useContext(TouchContext);
  const imagesForBanner = [
    'images/Living-room/1.jpg',
    'images/Living-room/2.jpg',
    'images/Living-room/3.jpg',
    'images/Living-room/4.jpg',
    'images/Living-room/5.jpg',
    'images/Living-room/6.jpg',
    'images/Living-room/7.jpg',
    'images/Living-room/8.jpg',
    'images/Living-room/9.jpg',
    'images/Living-room/10.jpg',
    'images/Living-room/11.jpg',
    'images/Living-room/12.jpg'
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
                  Про нас
                </h2>
              </div>
            </div>
          </div>
        </section>
        <AboutUs />

        <ContactUs />
      </main>
    </div>
  );
};
