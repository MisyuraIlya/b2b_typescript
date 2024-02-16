// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { IProduct } from '../constructor';
import { useParams } from 'react-router-dom';
interface CatalogContextType {
  CatalogMethods: {
    setView : (value: boolean) => void,
    setPage : (value: number) => void,
    setTotalSize : (value: number) => void,
    setSearchValue : (value: string) => void,
    setTotalItems: (value: number) => void,
    filterProducts: (prodcuts: IProduct[]) => void,
  };

  view: boolean
  page: number
  totalSize: number
  searchValue: string
  filteredData: IProduct[]
  totalItems: number
  
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


  
const CatalogProvider: React.FC<CatalogProviderProps> = (props) => {
  // state
  const [view, setView] = useState(false)
  const [page, setPage] = useState(1)
  const [totalSize, setTotalSize] = useState(100)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState<IProduct[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const {level1, level2, level3} = useParams()
  // Helpers

  // Exports
  const filterProducts = (products: IProduct[]) => {
    if(searchValue){
      const filteredMachines = products.filter(val =>
        val.name.includes(searchValue)
      );
      setFilteredData(filteredMachines)
    } else {
      setFilteredData([])
    }
  }

  useEffect(() => {
    setPage(1)
  },[level1, level2, level3])

  const CatalogMethods = {
    setView,
    setPage,
    setTotalSize,
    setSearchValue, 
    setTotalItems,
    filterProducts
  };
  const value: CatalogContextType = {
    CatalogMethods,
    view,
    page,
    totalSize,
    searchValue,
    filteredData,
    totalItems
  };

  return <CatalogContext.Provider value={value} {...props} />;
};

export { useCatalog, CatalogProvider };
