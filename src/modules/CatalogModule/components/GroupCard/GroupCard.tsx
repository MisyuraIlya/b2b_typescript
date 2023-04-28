import React , {FC} from 'react';
import { AddToCart, IProduct } from '../../constructor';
interface GroupCardProps {
    item: IProduct
    handleOpenModal: (item: IProduct) => void
}
const GroupCard: FC<GroupCardProps> = ({item, handleOpenModal}) => {
    return (
        <div className='bg-white rounded-lg hover:shadow-md'>
            <div className='cursor-pointer' onClick={() => handleOpenModal(item)}>
                <div className='p-4'>
                    <p className='text-secondary'>{item.name}</p>
                    <p className='text-gray'>ברקוד: {item.barcode}</p>
                </div>
                <div>
                    <img src={item.image} />
                </div>
                <div className='grid grid-cols-2'>
                    <p className='text-right p-4'>יח: {item.packQuant}</p>
                    <p className='text-left p-4'>מחיר: {item.price.price} ₪</p>
                </div>
            </div>
            <AddToCart product={item} type={1}/>
        </div>
    );
};

export default GroupCard;