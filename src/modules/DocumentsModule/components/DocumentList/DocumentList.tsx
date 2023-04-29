import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './DocumentList.styles.scss';
import moment from 'moment-timezone'
import { Button2 } from '../../constructor';
import {Button} from '../../constructor';
import { DocumentService } from '../../constructor';
import OrderCard from '../OrderCard/OrderCard';
import { useActions } from '@/hooks/useActions';
import { onSuccessAlert } from '@/utils/sweetAlert/sweetAlert';
const DocumentList = () => {
    const {addItem, editItem} = useActions()
    const [active, setActive] = useState<string | number | null>(null)
    const {data, isLoading ,refetch}= useQuery(['documentOrders'], () => DocumentService.FetchAllOrders())
    const {data:orderItems, isLoading: orderItemsLoading ,refetch: orderItemsRefetch}= useQuery(['FetchOrderItemsById'], () => DocumentService.FetchOrderItemsById(active))

    const choosedOrder = (id: number | string) => {
        if(active == id) {
            setActive(null)
        } else{
            setActive(id)
        }
    }
    useEffect(() => {
        orderItemsRefetch()
    },[active])

    const handleAddToCart = async (id: number | string) => {
        const data = await DocumentService.AddToCartOrderItems(id)
        data.map((item) => {
            addItem(item.product)
            editItem({ id: item.product.id, quantity: +item.quantity })
        })
        onSuccessAlert('נוסף בהצלחה','פריטים נוספו')
    }

    return (
        <div className='DocumentList py-4'>
            <div className='grid grid-rows-9 grid-flow-col gap-12 py-4'>
                <p>#</p>
                <p>תאריך ערך</p>
                <p>אסמכתא</p>
                <p>ה.מסחרית</p>
                <p>מע״מ</p>
                <p>לתשלום</p>
                <p>סוג</p>
            </div>
            {data?.map((item,index) => {
                return (
                    <>
                    <div className='grid grid-rows-9 grid-flow-col gap-6 mt-4 py-4 rounded-md px-4 text-center items-center cursor-pointer bg-secondary text-white' key={index} onClick={() => choosedOrder(item.orderExId)}>
                            <p>{item.orderExId}</p>
                            <p>{moment(item.Date).format('DD/MM/YYYY')}</p>
                            <p>{item.field1}</p>
                            <p>{item.field2}</p>
                            <p>{item.field3}</p>
                            <p>{item.field4}</p>
                            <p>{item.field5}</p>
                            <Button variant='dark' className='rounded-lg' onClick={() => handleAddToCart(item.orderExId)}>הוסף לסל</Button>
                            <Button variant='dark' className='rounded-lg'>הוסף לטיוטה</Button>
                    </div> 
                    {item.orderExId === active &&
                    <>
                        <div className='sub_head'>
                            <div className='flex-container'>
                                <div className='col-lg-2'>
                                    <p>מק״ט</p>
                                </div>
                                <div className='col-lg-2'>
                                    <p>שם</p>
                                </div>
                                <div className='col-lg-2'>
                                    <p>כמות</p>
                                </div>
                                <div className='col-lg-2'>
                                    <p>סה״כ</p>
                                </div>
                                <div className='col-lg-2'>
    
                                </div>
                                <div className='col-lg-2'>
    
                                </div>
                            </div>
                        </div>
                        {orderItemsLoading ?
                            <h2>Loading</h2>
                        :
                            orderItems?.map((prod, key) => {
                                return (
                                    <OrderCard prod={prod} />
                                )
                            })
                        }

                    </>

                    } 

                    </>
 
                )
            })}
        </div>
    );
};

export default DocumentList;