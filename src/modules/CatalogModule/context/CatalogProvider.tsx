// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';
import { useQuery  } from '@tanstack/react-query';
import { ICategory } from '../constructor';
import { IProduct } from '../constructor';
import { useDebounce } from 'use-debounce';

interface selectedIds {
  lvl1: number | null,
  lvl2: number | null,
  lvl3: number | null
}
interface CatalogContextType {
  CatalogMethods: {
    fetchAllProducts: (selectedIds: selectedIds, totalPageSize: number, pageNumber: number ) => void,
    setTotalSize: (size: number) => void,
    changePage: (page: number) => void,
    setSearchValue: (value: string) => void,
    setView: (view: boolean) => void
  };
  categoriesLoading: boolean;
  categoriesData: ICategory[];
  // productsData: IProduct[];
  products: IProduct[];
  filteredData: IProduct[];
  totalSize: number;
  categoryIds: selectedIds;
  loading: boolean,
  page: number,
  totalPages: number,
  searchValue: string,
  totalItems: number,
  view: boolean
}

const CatalogContext = createContext<CatalogContextType | null>(null);

// React hook
const useCatalog = (): CatalogContextType => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('Can not run without "CatalogProvider"');
  }
  return context;
};

interface CatalogProviderProps {
    children: ReactNode;
};

interface IFetchAllCategoriesResponse {
    data: ICategory[];
  }
  
const CatalogProvider: React.FC<CatalogProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [allowRegister, setAllowRegister] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([])
  const [totalSize, setTotalSize] = useState(10)
  const [categoryIds, setCategoryIds] = useState<{lvl1: number | null, lvl2: number | null, lvl3: number | null}>({ lvl1: null, lvl2: null, lvl3: null });
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [view, setView] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState<IProduct[]>([])
  // Helpers
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

  // const { isLoading: isProductsLoading, error: productsError, data: productsData } = useQuery(
  //   'products',
  //   () =>
  //     fetch('https://digitrade.store/my_test/src/index.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         classPoint: 'ProductsController',
  //         funcName: 'FetchProducts',
  //         val: val

  //       }),
  //     }).then((res) =>
  //       res.json().then((data) => {
  //         console.log(data)
  //         return data.data;
  //       })
  //     ),
  //   {
  //     useErrorBoundary: true,
  //     cacheTime: 60 * 60 * 1000, // 1 hour
  //     staleTime: 5 * 60 * 1000, // 5 minutes
  //   }
  // );
  


  // Exports
  const filterProducts = () => {
    if(searchValue){
      const filteredMachines = products.filter(val =>
        val.name.includes(searchValue)
      );
      setFilteredData(filteredMachines)
    } else {
      setFilteredData([])
    }
  }

  const fetchAllProducts = async (selectedIds: selectedIds, totalPageSize: number = totalSize, pageNumber: number = page) => {
    setCategoryIds(selectedIds)
    setLoading(true)
    let val = {
      lvl1: selectedIds.lvl1,
      lvl2: selectedIds.lvl2,
      lvl3: selectedIds.lvl3,
      pageSize: totalPageSize ? totalPageSize : totalSize,
      page: pageNumber ? pageNumber : page
    }
    try {
    const res = await axios.post(`${API_BACKEND}`, {
      classPoint: 'ProductsController',
      funcName: 'FetchProducts',
      val: val
    });
    setProducts(res.data.data.data);
    setTotalPages(res.data.data.totalPages)
    setTotalItems(res.data.data.totalItems)
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }

  };

  const changePage = (page: number) => {
      setPage(page)
      fetchAllProducts(categoryIds, totalSize, page)
  }

  useEffect(() => {
    filterProducts()
  },[searchValue])

  const CatalogMethods = {
    fetchAllProducts,
    setTotalSize,
    changePage,
    setTotalPages,
    setSearchValue,
    setView
  };
  const value: CatalogContextType = {
    CatalogMethods,
    categoriesLoading: isCategoriesLoading,
    categoriesData,
    // productsData,
    products,
    totalSize,
    categoryIds,
    loading,
    page,
    totalPages,
    searchValue,
    filteredData,
    totalItems,
    view
  };

  return <CatalogContext.Provider value={value} {...props} />;
};

export { useCatalog, CatalogProvider };
