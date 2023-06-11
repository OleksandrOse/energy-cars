import { FC, useContext } from 'react';
import './Footer.scss';
import { TouchContext } from '../../helpers/TouchProvider';

export const Footer: FC = () => {
  const { isTouchOpen } = useContext(TouchContext);

  return (
    <div hidden={isTouchOpen}>
      <footer
        className="footer"
      >
        <div className="footer__container">
          <div className="grid grid--tablet grid--dekstop">
            <div className="footer__section grid__item grid__item--tablet-1-2 grid__item--dekstop-1-3">
              <h5 className="footer__title">Контакти</h5>
              <div className="footer__address">
                <a
                  className="footer__link"
                  href="https://goo.gl/maps/kHYw7xw5jNAZtmHK6"
                  target="_blank"
                  rel="noopener"
                >
                  Тернопіль, вул. Обїзна, 6
                </a>
                <div className="footer__tel">
                  <div>тел.</div>

                  <a className="footer__link" href="tel:278-13-57">
                    278-13-57,
                  </a>

                  <a className="footer__link" href="tel:278-74-54">
                    278-74-54
                  </a>
                </div>

                <a
                  className="footer__link"
                  href="mailto:info@namu.kiev.ua"
                >
                  info@namu.kiev.ua
                </a>
              </div>

              <div className="footer__networks">
                <a
                  className="footer__network"
                  href="https://www.facebook.com/namu.museum/"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.90909 10.9434V20H6.54545V10.9434H9.27273L10 7.16981H6.54545V4.5283C6.54545 3.96226 7.09091 3.39623 7.63636 3.39623H10V0H5.81818C4.90909 0 2.90909 1.32075 2.90909 3.39623V7.16981H0V10.9434H2.90909Z"
                      fill="#F1F5F4" 
                    />
                  </svg>
                </a>
                <a
                  className="footer__network"
                  href="https://twitter.com/NAMU_120?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.78947 13.9669C2.94737 14.4548 0.912281 14.4412 0 14.3734C0.421053 14.78 3.57895 16 6.52632 16C9.47368 16 11.5789 15.5934 15.1579 12.3408C18.0211 9.73865 18.3158 5.971 18.1053 4.41244L20 2.37953H18.3158L19.3684 0.346626C18.5965 0.820951 17.0105 1.64763 16.8421 1.15973C16.6316 0.549857 13.6842 -0.873177 11.1579 0.753142C9.13684 2.0542 9.47368 3.80257 9.68421 5.22553C5.89474 4.81902 1.05263 0.753142 1.05263 0.753142C-0.122503 2.86053 1.46337 5.41233 2.09911 6.43529L2.10526 6.4452L0.631579 6.03862C0.631579 7.82757 2.31579 9.08812 3.15789 9.69776H1.89474C2.56842 11.4867 4.70175 12.4761 5.68421 12.7471C5.40351 12.9504 4.63158 13.479 3.78947 13.9669Z"
                      fill="#F1F5F4" 
                    />
                  </svg>

                </a>
                <a
                  className="footer__network"
                  href="https://t.me/namuofficial"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.62887 17.4639L10.9278 14.2887L16.4948 19.0515L20 0L0 8.16495L5.56701 10.8866L7.62887 17.4639ZM8.0412 15.6495V12.0207L16.4948 3.85572L6.18553 10.433L8.0412 16.1031V15.6495Z"
                      fill="#F1F5F4"
                    />
                  </svg>
                </a>
                <a
                  className="footer__network footer__network--instagram"
                  href="https://www.instagram.com/namu.museum/?hl=uk"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 13.2442V2.56977C0 1.38372 1.38372 0 2.76744 0H14.2326C15.814 0 17 1.5814 17 3.36047V14.0349C17 15.2209 16.0116 17 13.8372 17H3.95349C1.77907 17 0 15.4186 0 13.2442ZM8.50003 5.54189C6.8663 5.54189 5.54189 6.8663 5.54189 8.50003C5.54189 10.1338 6.8663 11.4582 8.50003 11.4582C10.1338 11.4582 11.4582 10.1338 11.4582 8.50003C11.4582 6.8663 10.1338 5.54189 8.50003 5.54189ZM4.34189 8.50003C4.34189 6.20356 6.20356 4.34189 8.50003 4.34189C10.7965 4.34189 12.6582 6.20356 12.6582 8.50003C12.6582 10.7965 10.7965 12.6582 8.50003 12.6582C6.20356 12.6582 4.34189 10.7965 4.34189 8.50003ZM13.0466 4.5465C13.5924 4.5465 14.035 4.10399 14.035 3.55813C14.035 3.01226 13.5924 2.56976 13.0466 2.56976C12.5007 2.56976 12.0582 3.01226 12.0582 3.55813C12.0582 4.10399 12.5007 4.5465 13.0466 4.5465Z"
                      fill="#F1F5F4" 
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="
            footer__section
            grid__item
            grid__item--tablet-3-4
            grid__item--dekstop-5-7
          ">
              <h5 className="footer__title">Розклад роботи</h5>

              <div className="footer__schedule">
                <div>ПН:вихідний</div>
                <div>ВТ:вихідний</div>
                <div>СР:10:00 - 17:00</div>
                <div>ЧТ:10:00 - 17:00</div>
                <div>ПТ:12:00 - 19:00</div>
                <div>СБ:11:00 - 18:00</div>
                <div>НД:10:00 - 17:00</div>
              </div>
            </div>

            <div className="
            footer__section
            grid__item
            grid__item--tablet-5-6
            grid__item--dekstop-9-10
          ">
              <h5 className="footer__title">Категорії</h5>

              <div className="footer__link-container">
                <a href="#actual-exhibitions" className="footer__link">Головна</a>
              </div>

              <div className="footer__link-container">
                <a href="#upcoming-events" className="footer__link">Про нас</a>
              </div>

              <div className="footer__link-container">
                <a href="#news" className="footer__link">Послуги</a>
              </div>

              <div className="footer__link-container">
                <a href="#news" className="footer__link">Каталог автомобілів</a>
              </div>

              <div className="footer__link-container">
                <a href="#news" className="footer__link">Відгуки</a>
              </div>

              <div className="footer__link-container">
                <a href="#news" className="footer__link">Контакти</a>
              </div>
            </div>
          </div>

          <div className="footer__down">
            <div className="footer__text">
              <div>
                © 2010 — 2023
              </div>
              <div>
                Privacy - Terms
              </div>
            </div>
            <a href="#" className="footer__arrow"></a>
          </div>
        </div>

        <div className="footer__energy">
          Energy Cars - доставка авто з норвегії
        </div>
      </footer>
    </div>
  );
};
