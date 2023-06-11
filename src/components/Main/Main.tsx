import { FC, useContext } from 'react';
import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { ContactUs } from '../ContactUs/ContactUs';
import { TouchContext } from '../../helpers/TouchProvider';
import classNames from 'classnames';
import { Services } from '../Services/Services';
import { AboutUs } from '../AboutUs/AboutUs';
import { Advantages } from '../Advantages/Advantages';

export const Main: FC = () => {
  const { isTouchOpen } = useContext(TouchContext);

  return (
    <main
      className={classNames(
        "page__main",
        { "page__main--touch": isTouchOpen },
      )}
    >
      <About />

      <Services/>

      <AboutUs/>

      {/* <Advantages/> */}

      <ContactUs />
    </main>
  );
};
