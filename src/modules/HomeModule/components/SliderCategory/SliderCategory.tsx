import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICategory } from '../../constructor';
import './SliderCategory.styles.scss';
import 'swiper/css';

interface SliderCategoryProps {
    slides: number;
    data?: Array<ICategory>
}

const SliderCategory: FC<SliderCategoryProps> = ({slides, data}) => {
    return (
        <div className='SliderCategory'>
        <div>
            <h4>קטגוריות</h4>
        </div>
        <Swiper
        spaceBetween={1}
        slidesPerView={slides}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={10}
        autoplay={true}
        >
            {data?.map((item,index) => 
                <SwiperSlide key={index}>
                    <div className='card'>
                        <div className='img_cont'>
                            <img src={item.image} alt="slider" />
                        </div>
                        <div className='title'>
                            <h4>{item.name}</h4> 
                        </div>
                    </div>

                </SwiperSlide>
            )}
        </Swiper> 
        </div>
    );
};

export default SliderCategory;