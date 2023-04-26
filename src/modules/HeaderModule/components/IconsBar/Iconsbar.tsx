import React, { useState } from 'react';
import { MdShoppingCart, MdPerson, MdShoppingBag, MdOutlineShoppingBag, MdOutlineSettings } from "react-icons/md";
import { Button, useActions } from '../../constructor';
import { useNavigate } from 'react-router-dom'; 
import './Iconsbar.styles.scss';
const Iconsbar = () => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const navigate = useNavigate()
    const {toggleMode} = useActions();
    const handleMouseEnter = () => {
      setIsMouseOn(true);
    };
  
    const handleMouseLeave = () => {
      setIsMouseOn(false);
    };
    return (
        <div className='Iconsbar'>
            <div className='myPadding pointer' onClick={() => navigate('/cart')}>
                <MdShoppingCart/>
            </div>
            <div className='myPadding ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <MdPerson/>
                {isMouseOn &&
                <div className='modal center'>
                    <div className='content'>
                        <div className='btn_logout center'> 
                            <Button variant="dark">Log out</Button>
                        </div>    
                        <div className='card pointer' onClick={() => navigate('/profile')}>
                            <div className='card_img center'>
                                <MdPerson/>
                            </div>    
                            <div className='card_title'>
                                <p>profile</p>
                            </div>    
                        </div> 
                        <div className='card pointer' onClick={() => navigate('/documents')}>
                            <div className='card_img center'>
                                <MdShoppingBag/>
                            </div>    
                            <div className='card_title'>
                                <p>orders</p>
                            </div>    
                        </div> 
                        <div className='card pointer' >
                            <div className='card_img center'>
                                <MdOutlineShoppingBag/>
                            </div>    
                            <div className='card_title'>
                                <p>categories</p>
                            </div>    
                        </div> 
                        <div className='card pointer'>
                            <div className='card_img center'>
                                <MdOutlineSettings/>
                            </div>    
                            <div className='card_title'>
                                <p>settings</p>
                            </div>    
                        </div>

                    </div>   
                </div>
                }
            </div>
            <div className='myPadding pointer' onClick={() => navigate('/catalog')}>
                <MdShoppingBag/>
            </div>
            <button onClick={() => toggleMode()}>
                toggle
            </button>    
        </div>
    );
};

export default Iconsbar;