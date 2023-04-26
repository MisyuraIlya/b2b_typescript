import React from 'react';
import { useCart } from '../../constructor';
import './Invoice.styles.scss';
import DeliverySelectBox from '../DeliverySelectBox/DeliverySelectBox';
import {Button2} from '../../constructor';
const mockData = {total:190.50, discount:10, tax:30}
const Invoice = () => {
    // const { total, tax, totalBeforeTax, totalBeforeDiscount, discount, totalAfterDiscount} = useCart()
    return (
        <div className='Invoice'>
            {/* <h4>פרטי הזמנה</h4>

            <div className='first_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>סה״כ לפני מע״מ</span>
                    </div>
                    <div className='price'>
                        <span>₪{totalBeforeTax}</span>
                    </div>
                </div>
                <div className='cont_block'>
                    <div className='title'>
                        <span>הנחה כללית: </span>
                    </div>
                    <div className='price'>
                        <span>%{discount}</span>
                    </div>
                </div>
            </div>
            <div className='second_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>סה״כ לפני הנחה</span>
                    </div>
                    <div className='price'>
                        <span>₪{totalBeforeDiscount}</span>
                    </div>
                </div>
                <div className='cont_block'>
                    <div className='title'>
                        <span>סה״כ אחרי הנחה</span>
                    </div>
                    <div className='price'>
                        <span>₪{totalAfterDiscount}</span>
                    </div>
                </div>
                <div className='cont_block'>
                    <div className='title'>
                        <span>מע״מ </span>
                    </div>
                    <div className='price'>
                        <span>{tax}</span>
                    </div>
                </div>
            </div>
            <div className='second_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>משלוח</span>
                    </div>
                    <div className='price'>
                        <span>1000</span>
                    </div>
                </div>
            </div>
            <div className='third_block'>
                <div className='cont_block'>
                    <div className='title'>
                        <span>מחיר לתשלום</span>
                    </div>
                    <div className='price'>
                        <span className='sum'>₪{total}</span>
                    </div>
                </div>
            </div>
            <DeliverySelectBox/>
            <div className='center'>
                <Button2 Primary={false}>Send</Button2>
            </div> */}
        </div>
    );
};

export default Invoice;