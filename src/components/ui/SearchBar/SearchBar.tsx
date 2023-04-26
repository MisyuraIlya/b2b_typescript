import React, { FC, useState } from 'react';
import './SearchBar.styles.scss'
export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface SearchBarProps {
  products: Product[];
}

const SearchBar: FC<SearchBarProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='SearchBar'>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;