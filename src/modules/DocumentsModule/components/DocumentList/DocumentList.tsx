import React from 'react';
import './DocumentList.styles.scss';
import moment from 'moment-timezone'
import { Button2 } from '../../constructor';
import {Button} from '../../constructor';
const mockData = [
    {id:1, order:'1', date: new Date(), asmahta:'123', mehir:'123', maam:'123', total:'123', type:'123'},
    {id:2, order:'1', date: new Date(), asmahta:'123', mehir:'123', maam:'123', total:'123', type:'123'},
    {id:3, order:'1', date: new Date(), asmahta:'123', mehir:'123', maam:'123', total:'123', type:'123'}
]

const mockDataSubProds = [
    {id:1, sku:'1', description:'123', quantity:1, total:100},
    {id:2, sku:'1', description:'123', quantity:1, total:100}
]
const DocumentList = () => {
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
            {mockData?.map((item,index) => {
                return (
                    <>
                    <div className='grid grid-rows-9 grid-flow-col gap-12 mt-4 py-4 rounded-md px-4 text-center items-center cursor-pointer bg-secondary text-white' key={index}>
                            <p>{item.order}</p>
                            <p>{moment(item.date).format('DD/MM/YYYY')}</p>
                            <p>{item.asmahta}</p>
                            <p>{item.mehir}</p>
                            <p>{item.maam}</p>
                            <p>{item.type}</p>
                            <p>{item.total}</p>
                            <Button variant='dark' className='rounded-lg'>הוסף לסל</Button>
                            <Button variant='dark' className='rounded-lg'>הוסף לטיוטה</Button>
                    </div>  
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
                    {mockDataSubProds?.map((prod, key) => {
                        return (
                            <div className='card_prod py-4' key={key}>
                                <div className='flex-container'>
                                    <div className='col-lg-2'>
                                        <p>{prod.sku}</p>
                                    </div>
                                    <div className='col-lg-2'>
                                        <p>{prod.description}</p>
                                    </div>
                                    <div className='col-lg-2'>
                                        <p>{prod.quantity}</p>
                                    </div>
                                    <div className='col-lg-2'>
                                        <p>{prod.total}</p>
                                    </div>
                                    <div className='col-lg-2'>
                                        <Button variant='dark' className='rounded-lg '>הוסף לסל</Button>
                                    </div>
                                    <div className='col-lg-2'>
                                        <Button variant='dark' className='rounded-lg'>הוסף לטיוטה</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                    </>
 
                )
            })}
        </div>
    );
};

export default DocumentList;