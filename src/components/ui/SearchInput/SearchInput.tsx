import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchInput.styles.scss'
interface Props {
  searchState: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<Props> = ({ searchState, onSearchChange }) => {
  return (
    <div className="SearchInput">
      <input
        type="text"
        className=""
        placeholder="חיפוש"
        value={searchState}
        onChange={onSearchChange}
      />
      <FaSearch className="icon" />
    </div>
  );
};

export default SearchInput;
