import React, { FC } from 'react';
import './AddToCart1.styles.scss'
import { IProduct } from '../../../models/product.interface';
interface AddToCart1Props { 
    item: IProduct;
    handleAddItem: (product: IProduct) => void;
    handleIncreaseQuantity: (id: number) => void;
    // TODO 
    getCartItem: (productId: number) => { quantity: number } | undefined;
    handleDecreaseQuantity: (id: number) => void;
    onEdit: (quantity: number) => void;
}
const AddToCart1: FC<AddToCart1Props> = ({item, handleAddItem, handleIncreaseQuantity, getCartItem, handleDecreaseQuantity, onEdit}) => {

    return (
        <div className='AddToCart1'>
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

export default AddToCart1;