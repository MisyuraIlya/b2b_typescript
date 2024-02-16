import React, {FC} from 'react';
import './PopUpCard.styles.scss'
import { IProduct } from '../../../models/product.interface';

interface PopUpCardProps {
    data: IProduct
}
const PopUpCard: FC<PopUpCardProps> = ({data}) => {
    return (
        <div className='PopUpCard'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <div className='card_image'>
                        <img src={data.image} />
                    </div>
                </div>
                <div className='col-lg-8'>
                    <h1>{data?.name}</h1>
                    <div className='flex-container'>
                        <div className='col-lg-3'>
                            <div>
                                <p>יח במארז</p>
                            </div>
                            <div>
                                <p>מספר קטלוגי</p>
                            </div>
                            <div>
                                <p>ברקוד</p>
                            </div>
                            <div>
                                <p>מותג</p>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <div>
                                <p>{data?.packQuant}</p>
                            </div>
                            <div>
                                <p>{data?.sku}</p>
                            </div>
                            <div>
                                <p>{data?.barcode}</p>
                            </div>
                            <div>
                                <p>{data?.category?.name}</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default PopUpCard;