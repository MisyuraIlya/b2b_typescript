import React, {FC} from 'react';
import { Button } from '../../constructor';
import { OrderItemsResponse } from '@/services/documents/documents.types';
import { IProduct } from '@/models/product.interface';
import { DocumentService } from '../../constructor';
import { useActions } from '@/hooks/useActions';
import { onSuccessAlert } from '@/utils/sweetAlert/sweetAlert';
interface OrderCardProps {
    prod: {
        product: IProduct
        quantity: string | number
        total: string | number
    }
}
const OrderCard: FC<OrderCardProps> = ({prod}) => {
    const {addItem, editItem} = useActions()

    const handleAddToCart = async () => {
        addItem(prod.product)
        editItem({ id: prod.product.id, quantity: +prod.quantity })
        onSuccessAlert('נוסף בהצלחה','פריטים נוספו')
    }
    
    return (
        <div className='card_prod py-4'>
            <div className='flex-container'>
                <div className='col-lg-2'>
                    <p>{prod.product.sku}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{prod.product.name}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{prod.quantity}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{prod.total}</p>
                </div>
                <div className='col-lg-2'>
                    <Button variant='dark' className='rounded-lg' onClick={() => handleAddToCart()}>הוסף לסל</Button>
                </div>
                <div className='col-lg-2'>
                    <Button variant='dark' className='rounded-lg'>הוסף לטיוטה</Button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;