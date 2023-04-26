import React, {FC} from 'react';
import CartActions from '../CartActons/CartActions';
import { ICart } from '@/models/cart.interface';
const CartItem: FC<{item: ICart}> = ({item}) => {
    return (
        <>
            <div className='flex py-2'>
                    <img src={item.product.image}  className='w-6/12 px-4'/>
                <div>
                    <div>{item.product.name}</div>
                    <div>{item.product.price.price}</div>
                    <CartActions item={item}/>
                </div>    
            </div>
        </>

    );
};

export default CartItem;