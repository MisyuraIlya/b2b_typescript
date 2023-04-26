import React, { FC, useState } from 'react';
import './AddToCart2.styles.scss'
import { IProduct } from '../../../models/product.interface';
interface AddToCart2Props { 
    item: IProduct;
    handleAddItem: (product: IProduct) => void;
    handleIncreaseQuantity: (id: number) => void;
    getCartItem: (productId: number) => { quantity: number } | undefined;
    handleDecreaseQuantity: (id: number) => void;
    onEdit: (quantity: number) => void;
}
const AddToCart2: FC<AddToCart2Props> = ({item, handleAddItem, handleIncreaseQuantity, getCartItem, handleDecreaseQuantity, onEdit}) => {

    return (
        <div className='AddToCart2'>
            { !(Boolean(getCartItem(item.id))) ?       
                <div className='notActive' onClick={() => handleAddItem(item)}>
                    <span>הוספה לסל</span>
                </div>
            :
                <div className='active'>
                    <div className='flex-container'>
                        <div className='col-lg-4'>
                            <div className='increase' onClick={() => handleIncreaseQuantity(item.id)}>
                                <span>+</span>
                            </div>    
                        </div>    
                        <div className='col-lg-4'>
                            <div className='value'>
                            <input type="number" value={getCartItem(item.id)?.quantity} onChange={(e) => onEdit(parseInt(e.target.value))}  />
                            </div>    
                        </div>   
                        <div className='col-lg-4'>
                            <div className='decrease' onClick={() => handleDecreaseQuantity(item.id)}>
                                <span>-</span>
                            </div>    
                        </div>   
                    </div>    
                </div>
            }
        </div>
    );
};

export default AddToCart2;