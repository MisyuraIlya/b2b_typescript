// Global
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useQuery,  } from '@tanstack/react-query';
import { ICategory, IProduct } from '../constructor';
import { API_BACKEND } from '../constructor';
interface HomeContextType {
  HomeMethods: {
    fetchAllProducts: () => void
  };
  products: IProduct[];
  categoriesData: ICategory[];
}

const HomeContext = createContext<HomeContextType | null>(null);

// React hook
const useHome = (): HomeContextType => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('Can not run without "HomeProvider"');
  }
  return context;
};

interface HomeProviderProps {
    children: ReactNode;
};

interface IFetchAllCategoriesResponse {
    data: IProduct[];
  }
  
const HomeProvider: React.FC<HomeProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  // Helpers

  const fetchAllProducts = async () => {
    setLoading(true)
    let val = {
      lvl1: null,
      lvl2: null,
      lvl3: null,
      pageSize: 10,
      page: 1
    }
    try {
    const res = await axios.post(`${API_BACKEND}`, {
      classPoint: 'ProductsController',
      funcName: 'FetchProducts',
      val: val
    });
    setProducts(res.data.data.data);

    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

  };

  const { isLoading: isCategoriesLoading, error: categoriesError, data: categoriesData } = useQuery(
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
  // Exports
  const HomeMethods = {
    fetchAllProducts
  };
  const value: HomeContextType = {
    HomeMethods,
    products,
    categoriesData
  };

  return <HomeContext.Provider value={value} {...props} />;
};

export { useHome, HomeProvider };
