import React from 'react';
import './DocumentList.styles.scss';
import moment from 'moment-timezone'
import { Button2 } from '../../constructor';
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
        <div className='DocumentList'>
            <div className='head'>
                <div className='flex-container'>
                    <div className='col-lg-1'>
                        <p>#</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>תאריך ערך</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>אסמכתא</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>ה.מסחרית</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>מע״מ</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>לתשלום</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>סוג</p>
                    </div>
                </div>
            </div>
            {mockData?.map((item,index) => {
                return (
                    <>
                    <div className='card_doc' key={index}>
                        <div className='flex-container'>
                            <div className='col-lg-1'>
                                <p>{item.order}</p>
                            </div>    
                            <div className='col-lg-2'>
                                <p>{moment(item.date).format('DD/MM/YYYY')}</p>
                            </div>  
                            <div className='col-lg-1'>
                                <p>{item.asmahta}</p>
                            </div>  
                            <div className='col-lg-1'>
                                <p>{item.mehir}</p>
                            </div>  
                            <div className='col-lg-1'>
                                <p>{item.maam}</p>
                            </div>  
                            <div className='col-lg-1'>
                                <p>{item.type}</p>
                            </div>  
                            <div className='col-lg-1'>
                                <p>{item.total}</p>
                            </div>  
                            <div className='col-lg-2'>
                                    <Button2 Primary={false}>הוסף לסל</Button2>
                            </div> 
                            <div className='col-lg-2'>
                                <Button2 Primary={false}>הוסף לטיוטה</Button2>
                            </div>    
                        </div>    
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
                            <div className='card_prod' key={key}>
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
                                        <Button2 Primary={false}>הוסף</Button2>
                                    </div>
                                    <div className='col-lg-2'>

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