import React, {FC} from 'react';
import { useProfile } from '@/hooks/useProfile';
import cn from 'clsx'
import { useOutside } from '../../constructor';
import { Button } from '../../constructor';
import './HeaderProfile.styles.scss';
import {RxAvatar} from 'react-icons/rx'
import { useAuth } from '../../constructor';
import { MdShoppingCart, MdPerson, MdShoppingBag, MdOutlineShoppingBag, MdOutlineSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const HeaderProfile: FC = () => {
    // const { profile } = useProfile()
    const navigate = useNavigate()
    const {isShow, setIsShow, ref} = useOutside(false)
    const {user} = useAuth()
    return (
        <div className='HeaderProfile relative' ref={ref}>
            <RxAvatar size={40} className='text-black dark:text-white'               
                onClick={() => {
                    setIsShow(!isShow)
                }} />

            <div className={cn(
                'absolute top-[4.2rem] w-80 -right-[12.5rem] bg-white dark:bg-secondary rounded-lg px-5 py-3 text-sm menu z-20 text-white',
                isShow ? 'open-menu' : 'close-menu'
            )}>
                <div className='font-normal text-lg myText flex items-center justify-center'>
                    <p>שלום {user?.email}</p>
                </div>
                <div className='modal center'>
                    <div className='w-full'>
                        <div className='flex py-2 pt-4 bgHover cursor-pointer myText' onClick={() => navigate('/profile')}>
                            <div className='items-center justify-center flex pl-4 pr-4'>
                                <MdPerson size={30}/>
                            </div>    
                            <div className='items-center justify-center flex'>
                                <p>פרופיל אישי</p>
                            </div>    
                        </div> 
                        <div className='flex py-2 bgHover cursor-pointer myText' onClick={() => navigate('/documents')}>
                            <div className='items-center justify-center flex pl-4 pr-4'>
                                <MdShoppingBag size={30}/>
                            </div>    
                            <div className='items-center justify-center flex'>
                                <p>הזמנות שלי</p>
                            </div>    
                        </div> 
                        <div className='flex py-2 bgHover cursor-pointer myText' >
                            <div className='items-center justify-center flex pl-4 pr-4'>
                                <MdOutlineShoppingBag size={30}/>
                            </div>    
                            <div className='items-center justify-center flex card_title'>
                                <p>סל קבוע</p>
                            </div>    
                        </div> 
                        <div className='flex py-2 bgHover cursor-pointer myText'>
                            <div className='items-center justify-center flex pl-4 pr-4'>
                                <MdOutlineSettings size={30}/>
                            </div>    
                            <div className='items-center justify-center flex card_title'>
                                <p>הגדרות</p>
                            </div>    
                        </div>
                    </div>   
                </div>
                <div className='text-center'>
                    <Button variant='light' className='btn-link mt-5 mb-2 rounded-lg'>
                        יציאה מהמערכת
                    </Button>
                </div>    
            </div> 
        </div>
    );
};

export default HeaderProfile;