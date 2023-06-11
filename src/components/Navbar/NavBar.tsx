import { PageNavLink } from '../PageNavLink/PageNavLink';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="main navigation"
      data-cy="categoryLinksContainer"
    >
      <ul className="nav__list">
        <PageNavLink to="/головна" title="Головна" />

        <PageNavLink to="/про-нас" title="Про нас" />

        <PageNavLink to="/послуги" title="Послуги" />

        <PageNavLink to="/каталог-автомобілів" title="Каталог автомобілів" />

        <PageNavLink to="/відгуки" title="Відгуки" />

        <PageNavLink to="/контакти" title="Контакти" />
      </ul>
    </nav>
  );
};
