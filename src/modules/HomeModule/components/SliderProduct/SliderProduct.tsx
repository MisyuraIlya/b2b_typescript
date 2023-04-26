import React, {FC, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../constructor';
import './SliderProduct.styles.scss';
import 'swiper/css';
import {Modal,PopUpCard,defaultProduct,AddToCart} from '../../constructor';
interface SliderProductProps {
    slides: number;
    data?: IProduct[]
}

const SliderProduct: FC<SliderProductProps> = ({slides, data}) => {
    console.log('data',data)
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
    const [openModal, setOpenModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenModal = (item: IProduct) => {
        setOpenModal(true)
        setChoosedProduct(item)
    }

    return (
        <div className='SliderProduct'>
        <div>
            <h4>מוצרים</h4>
        </div>
        <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay={true}
        >
            {data?.map((item,index) => 
                <SwiperSlide key={index}>
                    <div className='card myBg myText shadow-md5'>
                        <div onClick={() => handleOpenModal(item)}>
                            <div className='img_cont'>
                                <img src={item.image} alt="slider" />
                            </div>
                            <h4>{item.name}</h4>
                            {/* <p>{item.priceListBase.price} מחיר</p> */}
                            <p>{item.packQuant} יח במארז</p>
                            <p>{item.sku} מק״ט</p>
                        </div>
                        <AddToCart product={item} type={1}/>
                    </div>
                </SwiperSlide>
            )}
        </Swiper> 
        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </div>
    );
};

export default SliderProduct;