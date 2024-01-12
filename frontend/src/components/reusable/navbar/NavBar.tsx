import {
  AccountItemWrapper,
  NavBarWrapper,
  SearchWrapper,
} from './navbar.styled';

import CartIcon from '../../../assets/icons/cart.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import { ButtonWithIcon } from '../buttons';
import SearchBar from '../searchbar/SearchBar';
import { useState } from 'react';
import NavbarLinks from './NavbarItem';
import useScrollHeight from '../../../hooks/useScrollHeight';

const items = [
  {
    text: 'account',
    icon: ProfileIcon,
  },
  {
    text: 'cart',
    icon: CartIcon,
  },
];
export default function NavBar() {
  const [search, setSearch] = useState<string>('');
  const [scrollHeight] = useScrollHeight();

  console.log(scrollHeight > 0);
  return (
    <NavBarWrapper $scrollHeight={scrollHeight > 30}>
      <div>BuyBase</div>
      <SearchWrapper>
        <NavbarLinks />

        <SearchBar
          value={search}
          setValue={setSearch}
          placeholder='search products...'
          id='search_bar'
          name='search'
          type='text'
        />
        <AccountItemWrapper>
          {items.map((acount_items) => (
            <ButtonWithIcon key={acount_items.text} {...acount_items} />
          ))}
        </AccountItemWrapper>
      </SearchWrapper>
    </NavBarWrapper>
  );
}
