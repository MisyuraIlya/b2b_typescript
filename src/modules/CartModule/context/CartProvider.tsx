// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useQuery,  } from '@tanstack/react-query';
import { IProduct } from '../constructor';
import { useDebounce } from 'use-debounce';

interface CartContextType {
  CartMethods: {

  };
  DeliveryData : DeliveryData[]
}

interface DeliveryData {
    Date: string
    EnglishDayName: string
    HebrewDayName: string
}

const CartContext = createContext<CartContextType | null>(null);

// React hook
const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Can not run without "CartProvider"');
  }
  return context;
};

interface CartProviderProps {
    children: ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);

  // Helpers
  const { isLoading: DeliveryLoading, error: DeliveryError, data: DeliveryData } = useQuery(
    ['cart'],
    () =>
      fetch('https://digitrade.store/my_test/src/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          classPoint: 'CartController',
          funcName: 'DeliveryData',
        }),
      }).then((res) =>
        res.json().then((data) => {
            console.log('data.data',data.data)
            const filter = data.data.map(( obj: DeliveryData ) => ({
                value: obj.HebrewDayName + ' ' + obj.Date,
                label: obj.HebrewDayName + ' ' + obj.Date,
              }));
              console.log('filter',filter)
          return filter;
        })
      ),
    {
      useErrorBoundary: true,
      cacheTime: 60 * 60 * 1000, // 1 hour
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );


  const CartMethods = {

  };
  const value: CartContextType = {
    CartMethods,
    DeliveryData,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export { useCart, CartProvider };
