import { NavLink } from 'react-router-dom';
import { NaviItemsWrapper } from './navbar.styled';

const links = ['Home', 'Products', 'About', 'Services'];

export default function NavbarLinks() {
  return (
    <NaviItemsWrapper>
      {links.map((linkItem) => {
        return (
          <li>
            <NavLink
              to={`${linkItem === 'Home' ? '/' : linkItem.toLocaleLowerCase()}`}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {linkItem}
            </NavLink>
          </li>
        );
      })}
    </NaviItemsWrapper>
  );
}
