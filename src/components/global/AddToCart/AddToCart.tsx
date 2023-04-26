import React, { FC, useState} from 'react';
import AddToCart1 from '../../ui/AddToCart1/AddToCart1';
import AddToCart2 from '../../ui/AddToCart2/AddToCart2';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IProduct } from '../../../models/product.interface';
import { useCart } from '@/hooks/useCart';
interface AddToCartProps {
    product: IProduct;
    type: number;
}
const AddToCart: FC<AddToCartProps> = ({product,type}) => {
    const {addItem, increaseQuantity, decreaseQuantity, removeItem, editItem} = useActions()
    const {items} = useCart()

    const getCartItem = (productId: number) => {
        const data = items.find((item) => item.product.id === productId)
        return data
      };
      
    const handleAddItem = (product: IProduct) => {
        addItem(product);
    };

    const handleIncreaseQuantity = (id: number) => {
        increaseQuantity(id);
    };

    const handleDecreaseQuantity = (id: number) => {
        decreaseQuantity(id);
    };

    const handleRemoveItem = (id: number) => {
        removeItem(id);
    };

    const onEdit = (quantity: number) => {
        editItem({id: product.id, quantity: quantity})
    }

    return (
        <>
            {type == 1 ? 
            <AddToCart1
            item={product}
            handleAddItem={handleAddItem}
            handleIncreaseQuantity={handleIncreaseQuantity}
            getCartItem={getCartItem}
            handleDecreaseQuantity={handleDecreaseQuantity}
            onEdit={onEdit}
            />
            : 
            <AddToCart2
            item={product}
            handleAddItem={handleAddItem}
            handleIncreaseQuantity={handleIncreaseQuantity}
            getCartItem={getCartItem}
            handleDecreaseQuantity={handleDecreaseQuantity}
            onEdit={onEdit}
            />}
        </>
    );
};

export default AddToCart;