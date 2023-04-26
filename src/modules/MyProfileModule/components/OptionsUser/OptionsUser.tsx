import React from 'react';
import './OptionsUser.styles.scss';
import { MdShoppingCart, MdShoppingBag, MdOutlineChecklist } from "react-icons/md";

const OptionsUser = () => {
    return (
        <div className='OptionsUser'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <div className='crad'>
                        <div className='title'>
                            <h4>סל קבוע</h4>
                        </div>
                        <div className='image'>
                            <MdShoppingCart size={25}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='crad'>
                        <div className='title'>
                            <h4>המסמכים שלי</h4>
                        </div>
                        <div className='image'>
                            <MdShoppingBag size={25}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='crad'>
                        <div className='title'>
                            <h4>חדש באתר</h4>
                        </div>
                        <div className='image'>
                            <MdOutlineChecklist size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionsUser;