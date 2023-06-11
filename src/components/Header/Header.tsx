import { FC, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { MenuContext } from '../../helpers/MenuProvider';
import { Navbar } from '../Navbar/NavBar';
import classNames from 'classnames';
import { TouchContext } from '../../helpers/TouchProvider';
import { Menu } from '../Menu/Menu';

export const Header: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isTouchOpen } = useContext(TouchContext);
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const title = path === '' ? 'furniture' : path.split('-').join(' ');

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('page--with-menu');
    } else {
      document.body.classList.remove('page--with-menu');
    }
  }, [isMenuOpen]);

  return (
    <header
      className={classNames(
        "header",
      )}
      hidden={isTouchOpen}
    >
      <div className="header__top-container">
        <div className="header__top">
          <div className='header__top-phone'>
            <a href="tel: +8 067 208-42-83" className="header__icon header__icon--phone">
            </a>

            <a href="tel: +8 067 208-42-83" className="header__phone">
              +8 067 208-42-83
            </a>
          </div>

          <div className='header__top-mesenger'>
            <a href="tel: +1 647 773-62-73" className="header__icon header__icon--facebook">
            </a>

            <a href="tel: +1 647 773-62-73" className="header__icon header__icon--instagram">
            </a>

            <a href="tel: +1 647 773-62-73" className="header__icon header__icon--telegram">
            </a>

            <a href="tel: +1 647 773-62-73" className="header__icon header__icon--twitter">
            </a>
          </div>
        </div>
      </div>
        <div className="header__content">
          <Logo />
          <div className="header__navbar">
            <Navbar />
          </div>

          <a
            className="header__icon-menu"
            onClick={() => setIsMenuOpen(prev => !prev)}
          ></a>
        </div>
        <Menu/>
    </header>
  );
};
