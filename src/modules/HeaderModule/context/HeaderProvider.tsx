// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from '../constructor';
import { useDebounce } from 'use-debounce';
import { IProduct } from '../constructor';
interface HeaderContextType {
  HeaderMethods: {
    setSearchValue: (value: string) => void 
  };
  loading: boolean;
  data: ICategory[];
  searchValue: string;
  searchContent: IProduct[]
}

const HeaderContext = createContext<HeaderContextType | null>(null);

// React hook
const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('Can not run without "HeaderProvider"');
  }
  return context;
};

interface HeaderProviderProps {
    children: ReactNode;
};

interface IFetchAllCategoriesResponse {
    data: ICategory[];
  }
  
const HeaderProvider: React.FC<HeaderProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [allowRegister, setAllowRegister] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [searchDebouce] = useDebounce(searchValue, 1000);
  const [searchContent, setSearchContent] = useState<IProduct[]>([])
  // Helpers

  const { isLoading, error, data } = useQuery(
    ['categories'],
    () =>
      fetch('https://digitrade.store/my_test/src/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          classPoint: 'CategoriesController',
          funcName: 'FetchAllCategories',
        }),
      }).then((res) =>
        res.json().then((data) => {
          return data.data;
        })
      ),
    {
      useErrorBoundary: true,
      cacheTime: 60 * 60 * 1000, // 1 hour
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const fetchAllProducts = async () => {
    setLoading(true)
    let val = {
      filterValue: searchDebouce,
    }
    try {
    const res = await axios.post(`${API_BACKEND}`, {
      classPoint: 'ProductsController',
      funcName: 'FetchProductsByFilter',
      val: val
    });
    setSearchContent(res.data.data);
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

  };

  useEffect(() => {
    if(searchDebouce) {
      fetchAllProducts()
    } else {
      setSearchContent([])
    }
  },[searchDebouce])
  // Exports
  const HeaderMethods = {
    setSearchValue,
  };
  const value: HeaderContextType = {
    HeaderMethods,
    loading,
    data,
    searchValue,
    searchContent
  };

  return <HeaderContext.Provider value={value} {...props} />;
};

export { useHeader, HeaderProvider };
