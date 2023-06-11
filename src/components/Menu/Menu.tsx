import { FC, useContext } from 'react';
import './Menu.scss';
import { MenuContext } from '../../helpers/MenuProvider';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Menu: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClickScrollContact = () => {
    setIsMenuOpen(prev => !prev);
    const element = document.getElementById('contact-us');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll = () => {
    setIsMenuOpen(prev => !prev);
    const element = document.getElementById('about-us');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={
      classNames(
        "page__menu menu",
        { 'menu--visible': isMenuOpen },
      )}
      id="menu"
    >
      <div className="menu__container">
        <div className="menu__content">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Головна
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/про-нас"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Про нас
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/послуги"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Послуги
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/каталог-автомобілів"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Каталог автомобілів
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/відгуки"
                onClick={handleClickScroll}
              >
                Відгуки
              </NavLink>
            </li>

            <li className="menu__item">
            <NavLink
                aria-current="page"
                className="menu__link"
                to="/контакти"
                onClick={handleClickScroll}
              >
                Контакти
              </NavLink>
            </li>
          </ul>

          <a
            href="tel: +8 067 208-42-83"
            className="menu__call menu__call--phone"
          >
            +8 067 208-42-83
          </a>

          <a
            href="tel: +8 067 208-42-83"
            className="menu__call menu__call--action"
          >
            замов консультацію
          </a>
        </div>
      </div>
    </nav>
  );
};
