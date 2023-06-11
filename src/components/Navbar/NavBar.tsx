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
        <PageNavLink to="/living-room" title="Головна" />

        <PageNavLink to="/dining-room" title="Про нас" />

        <PageNavLink to="/bedroom" title="Послуги" />

        <PageNavLink to="/bathroom" title="Каталог автомобілів" />

        <PageNavLink to="/bedroom" title="Відгуки" />

        <PageNavLink to="/bathroom" title="Контакти" />
      </ul>
    </nav>
  );
};
