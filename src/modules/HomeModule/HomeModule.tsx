import React, {useEffect, useState} from 'react';
import Hero from './components/Hero/Hero';
import HeroSlider from './components/HeroSlider/HeroSlider';
import SliderCategory from './components/SliderCategory/SliderCategory';
import SliderProduct from './components/SliderProduct/SliderProduct';
import { Container } from './constructor';
import { IProduct } from './constructor';
import { ICategory } from './constructor';
import { HomeProvider } from './context/HomeProvider';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useActions } from '../AuthModule/constructor';


const HomeModule = () => {

    return (
        <div className='myBg'>
            {/* <div className='HomeModule'> */}
                <Hero/>
                {/* <HeroSlider/> */}
                <Container>
                    <SliderContainer/>
                </Container>
            {/* </div> */}
                {/* <button onClick={() => toggleMode()}>toggle</button> */}
        </div>

    );
};

export default HomeModule;