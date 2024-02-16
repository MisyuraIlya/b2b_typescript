import React, {FC} from 'react';
import { IProduct, useCart } from '../../constructor';
import { useActions } from '../../constructor';
interface ListCardProps {
    index: number
    item: IProduct
    handleOpenModal: (item: IProduct) => void
}

const ListCard:FC<ListCardProps> = ({index, item, handleOpenModal}) => {
    const {addItem, increaseQuantity, editItem, decreaseQuantity} = useActions()
    const {items} = useCart()
    const getCartItem = (productId: number) => {
        const data = items.find((item) => item.product.id === productId)
        return data
    };
    let odd = index % 2 == 0 ? 'double' : 'odd' 
    return (
        <div className='col-lg-12'>
            <div className={`card ${odd}`}>
                <div className='col-lg-1'>
                    <p>{item.category?.name}</p>
                </div>
                <div className='col-lg-1' key={index} onClick={() => handleOpenModal(item)}>
                    <img src={item?.image} />
                </div>
                <div className='col-lg-3'>
                    <p>{item?.name}</p>
                </div>
                <div className='col-lg-1'>
                    <p></p>
                </div>
                <div className='col-lg-2'>
                    <p>{item?.barcode}</p>
                </div>
                <div className='col-lg-1'>
                    <p>מלאי</p>
                </div>
                <div className='col-lg-1'>
                    {/* <p>{item.price.price}</p> */}
                </div>
                <div className='col-lg-1'>
                    <div className='px-2'>
                    { !(Boolean(getCartItem(item.id))) ?       
                        <div className='border border-secondary hover:bg-secondary text-center hover:text-white' onClick={() => addItem(item)}>
                            <span>הוספה</span>
                        </div>
                    :
                        <div className='grid grid-cols-3 border border-secondary  text-center cursor-pointer'>
                            <div className='hover:bg-secondary hover:text-white' onClick={() => increaseQuantity(item.id)}>
                                <span>+</span>
                            </div>    
                            <div className=''>
                                <input type="number" className='w-12 text-center text-black' value={getCartItem(item.id)?.quantity} onChange={(e) => editItem({id: item.id, quantity: parseInt(e.target.value)})} />
                            </div>    
                            <div className='hover:bg-secondary hover:text-white cursor-pointer' onClick={() => decreaseQuantity(item.id)}>
                                <span>-</span>
                            </div>    
                        </div>    
                    }
                    </div>    
                </div>
                <div className='col-lg-1'>
                    {/* {(getCartItem(item.id)?.quantity ?? 0) * (getCartItem(item.id)?.product.price.price ?? 0)} */}
                </div>
            </div>
        </div> 
    );
};

export default ListCard;