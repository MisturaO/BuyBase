import React from 'react';
import { SearchIcon } from '../icons';
import { SearchBarWrapper } from './searchbar.styled';

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  id: string;
  type: 'text' | 'search';
  name: string;
}
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  setValue,
  placeholder,
  id,
  type,
  name,
}) => {
  return (
    <SearchBarWrapper>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>
        <SearchIcon />
      </label>
    </SearchBarWrapper>
  );
};

export default SearchBar;
