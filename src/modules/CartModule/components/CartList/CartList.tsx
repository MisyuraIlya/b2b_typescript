import React, {useState} from 'react';
import './CartList.styles.scss';
import { AddToCart, Button2 } from '../../constructor';
import UseAnimations from 'react-useanimations';
import trash2 from 'react-useanimations/lib/trash2'
import { useActions, useTypedSelector } from '../../constructor';
import {IProduct, defaultProduct} from '../../constructor'
import {PopUpCard,Modal} from '../../constructor';
import {Heading} from '../../constructor';
import {Button} from '../../constructor';

const mockData = [
    {id:1, title:'productA', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:2, title:'productB', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:3, title:'productC', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
    {id:4, title:'productD', image:'https://havaya-b2b.co.il/src/img/products/9273.jpg', package:1,quantity:4, sku:'123', price:10, total:100},
]
const CartList = () => {

    const {cart} = useTypedSelector(state => state)
    const {removeItem} = useActions()
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
    const [openModal, setOpenModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenModal = (item: IProduct) => {
        setOpenModal(true)
        setChoosedProduct(item)
    }

    return (
        <>
        <div className='CartList'>
            <div className='cart_head'>
                <div className='title'>
                    <Heading>סיכום הזמנה</Heading>
                </div>
                <div className='options'>
                    <div className='btn'>
                        <Button variant='dark' className='rounded-lg'>שמור טיוטה</Button>
                    </div>
                    <div className='btn'>
                        <Button variant='dark' className='rounded-lg'>טען טיוטה</Button>
                    </div>
                </div>
            </div>
            <div className='listHead'>
                <div className='flex-container'>
                    <div className='col-lg-1'>
                        
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>כמות</p>
                    </div>
                    <div className='col-lg-2'>
                        
                    </div>
                    <div className='col-lg-2'>
                        <p>שם פריט</p>
                    </div>
                    <div className='col-lg-1 textAlign'>
                        <p>יח בקרטון</p>
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>מחיר ליחידה</p>
                    </div>
                    <div className='col-lg-2 textAlign'>
                        <p>סה״כ</p>
                    </div>
                </div>
            </div>
            <div className='list'>
                {cart.items?.map((item,index) => {
                    return(
                        <div className='item_card' key={index}>
                            <div className='flex-container content'>
                                <div className='col-lg-1 trash'
                                 onClick={() => removeItem(item.product.id)}
                                 >
                                <UseAnimations 
                                    animation={trash2}
                                    size={35}
                                    />   
                                </div>    
                                <div className='col-lg-2 center'>
                                    <AddToCart type={2} product={item.product}/>
                                </div>    
                                <div className='col-lg-2'>
                                    <div className='img_block' onClick={() => handleOpenModal(item.product)}>
                                        <img src={item.product.image} />
                                    </div>    
                                </div> 
                                <div className='col-lg-2'>
                                    <div className='title'>
                                        <p>{item.product.sku}#</p>
                                        <h4>{item.product.name}</h4>
                                    </div>    
                                </div> 
                                <div className='col-lg-1 center'>
                                    <div>
                                        <p>{item.product.packQuant}</p>
                                    </div>    
                                </div>
                                <div className='col-lg-2 center'>
                                    <div>
                                        <p>{item.product.price.price}</p>
                                    </div>    
                                </div> 
                                <div className='col-lg-2 center'>
                                    <div>
                                        <p>{item.product.price.price * item.quantity}</p>
                                    </div> 
                                </div> 
                            </div>    
                        </div>    
                    )
                })}
            </div>
        </div>
        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </>

    );
};

export default CartList;