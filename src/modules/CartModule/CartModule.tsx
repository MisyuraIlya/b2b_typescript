import React from 'react';
import './CartModule.styles.scss';
import Invoice from './components/Invoice/Invoice';
import CartList from './components/CartList/CartList';
import { CartProvider } from './context/CartProvider';
const CartModule = () => {
    return (
        <CartProvider>
            <div className='CartModule'>
                <div className='flex-container'>
                    <div className='col-lg-9'>
                        <CartList/>
                    </div>
                    <div className='col-lg-3 invoice_block'>
                        <Invoice/>
                    </div>
                </div>
            </div>
        </CartProvider>

    );
};

export default CartModule;