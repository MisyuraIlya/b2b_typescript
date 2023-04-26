import React, { useEffect } from 'react';
import SliderCategory from '../SliderCategory/SliderCategory';
import SliderProduct from '../SliderProduct/SliderProduct';
import { useHome } from '../../context/HomeProvider';
import { CategoryService, ProductService } from '../../constructor';
import { useQuery } from '@tanstack/react-query';

const SliderContainer = () => {
    // const {HomeMethods,products,categoriesData} = useHome()
    const {data: categoryData}= useQuery(['category'], () => CategoryService.getAll())
    const {data: productData}= useQuery(['products'], () => ProductService.getAll())
    console.log('productData',productData)
    return (
        <div>
            <SliderCategory slides={4} data={categoryData}/>
            <SliderProduct slides={4} data={productData}/> 
        </div>
    );
};

export default SliderContainer;