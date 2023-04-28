import React from 'react';
import cn from 'clsx'
import { Button, SquareButton } from '../../constructor';
import { useOutside } from '../../constructor';
import { useCart } from '../../constructor';
import {RiShoppingCartLine} from 'react-icons/ri'
import CartItem from '../CartItem/CartItem';
import './HeaderCart.styles.scss'
import {MdShoppingCartCheckout} from 'react-icons/md'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const HeaderCart = () => {

    const {isShow, setIsShow, ref} = useOutside(false)
    const {items, total} = useCart()
    const navigate = useNavigate()
    return (
        <div className='HeaderCart relative' ref={ref}>
            <SquareButton
                Icon={RiShoppingCartLine}
                onClick={() => {
                    setIsShow(!isShow)
                }}
                number={2}
            />

            <div className={cn(
                'absolute top-[4.2rem] -right-[10.5rem] w-80  bg-white dark:bg-secondary rounded-lg px-5 py-3 text-sm menu z-20 dark:text-white text-secondary shadow ',
                isShow ? 'open-menu' : 'close-menu'
            )}>
                <div className='font-normal text-lg mb-5'>
                    סל קניות שלי
                </div>
                <div>
                    {items.length > 0 
                    ? items.map(item => <CartItem item={item} key={item.id}/>)
                    : <div className='font-light'>cart is empty!</div>
                    }
                </div>    

                <div>
                    <div>סה״כ:</div>
                    <span className='font-bold text-lg'>{total} ₪</span>
                </div>
                <div className='flex text-center'>
                    <div className='py-2 px-2'>
                        <Button variant='dark' className='relative flex justify-center items-center btn-link mt-5 mb-2 rounded-lg' onClick={() => navigate('/cart')}>
                            לסיכום
                            <div className='absolute left-4'>
                                <FaFileInvoiceDollar/>
                            </div>
                        </Button>
                    </div> 
                    <div className='py-2 px-2'>
                        <Button variant='dark' className='relative flex justify-center items-center btn-link mt-5 mb-2 rounded-lg'>
                            לתשלום
                            <div className='absolute left-4'>
                                <MdShoppingCartCheckout/>
                            </div>
                        </Button>
                    </div>    
                </div>    
  
            </div>    
        </div>
    );
};

export default HeaderCart;