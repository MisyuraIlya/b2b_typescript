import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const mockData = [
    {id:1, imgLink: 'https://havaya-b2b.co.il/src/img/slider/desktop/7204527.jpg'},
    {id:2, imgLink: 'https://havaya-b2b.co.il/src/img/slider/desktop/8204733.jpg'},
    {id:3, imgLink: 'https://havaya-b2b.co.il/src/img/slider/desktop/6204505.jpg'},
]
const HeroSlider = () => {
    return (
        <div className='HeroSlider'>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay={true}
        >
            {mockData?.map((item,index) => 
                <SwiperSlide key={index}>
                    <img src={item.imgLink} alt="slider" />
                </SwiperSlide>
            )}
        </Swiper> 
        </div>
    );
};

export default HeroSlider;