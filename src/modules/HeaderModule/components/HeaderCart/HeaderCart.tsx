import React from 'react';
import cn from 'clsx'
import { Button, SquareButton } from '../../constructor';
import { useOutside } from '../../constructor';
import { useCart } from '../../constructor';
import {RiShoppingCartLine} from 'react-icons/ri'
import CartItem from '../CartItem/CartItem';
import './HeaderCart.styles.scss'
const HeaderCart = () => {

    const {isShow, setIsShow, ref} = useOutside(false)
    const {items, total} = useCart()
    
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
                    {/* {items.length ? (
                        items.map(item => <CartItem item={item} ley={item.id}/>)
                        ) : (
                            <div className='font-light'>cart is empty!</div>
                        )
                    )} */}
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
                        <Button variant='light' className='btn-link mt-5 mb-2 rounded-lg bg-secondary'>
                            לסיכום
                        </Button>
                    </div> 
                    <div className='py-2 px-2'>
                        <Button variant='light' className='btn-link mt-5 mb-2 rounded-lg'>
                            לתשלום
                        </Button>
                    </div>    
                </div>    
  
            </div>    
        </div>
    );
};

export default HeaderCart;