import { ICart } from '@/models/cart.interface';
import React, {FC} from 'react';
import { useActions, useCart } from '../../constructor';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
const CartActions: FC<{item: ICart}> = ({item}) => {
    const { removeItem, increaseQuantity, decreaseQuantity, editItem} = useActions()
    const { items } = useCart();
    const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity


    return (
        <div className='mt-3'>
            <div className='flex items-center gap-3'>
                <button
                    onClick={() => decreaseQuantity(item.product.id)}
                >
                    <FiMinus fontSize={13}/>
                </button>
                <input disabled readOnly value={quantity} className='w-10 bg:bg-primary dark:bg-black text-center rounded'/>

                <button
                    onClick={() => increaseQuantity(item.product.id)}
                >
                    <FiPlus fontSize={13}/>
                </button>

                <button className='ml-3 text-dark-primary' onClick={() => removeItem(item.product.id)}>
                    <FiTrash/>
                </button>

            </div>
        </div>
    );
};

export default CartActions;