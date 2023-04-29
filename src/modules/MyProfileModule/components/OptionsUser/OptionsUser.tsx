import React from 'react';
import './OptionsUser.styles.scss';
import { MdShoppingCart, MdShoppingBag, MdOutlineChecklist } from "react-icons/md";
import { Card } from '../../constructor';

const OptionsUser = () => {
    return (
        <div className='grid grid-cols-3 gap-24'>
            <Card className='bg-white rounded-md myCenter py-6 flex'>
                <MdShoppingCart size={25}/>
                סל קבוע
            </Card>
            <Card className='bg-white rounded-md myCenter py-6 flex' >
                <MdShoppingBag size={25}/>
                הזמנות שלי
            </Card>
            <Card className='bg-white rounded-md myCenter py-6 flex'>
                <MdOutlineChecklist size={25}/>
                רשימת קניות
            </Card>
        </div>

    );
};

export default OptionsUser;