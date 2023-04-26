import React, {useState} from 'react';
import './ListViewProductList.styles.scss'
import { useCatalog } from '../../context/CatalogProvider';
import { TailSpin } from 'react-loader-spinner';
import {AddToCart, Modal, PopUpCard} from '../../constructor';
import { IProduct, Pagination, defaultProduct } from '../../constructor';
const ListViewProductList = () => {

    const {CatalogMethods, products,loading, page, totalPages, filteredData, view} = useCatalog()
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
            {view &&
            <div className='ListViewProductList'>
                <div className='flex-container head'>
                    <div className='col-lg-1'>
                        <p>קטגוריה</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>תמונה</p>
                    </div>
                    <div className='col-lg-3'>
                        <p>שם</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>מותג</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>ברקוד</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>מלאי</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>מחיר</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>כמות</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>סה״כ</p>
                    </div>
                </div>
                {loading ?
                    <div className='loader_container'>
                    <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />
                    </div> 
                    :
                    <div className='flex-container'>
                        {(filteredData.length > 0 ? filteredData : products)?.map((item,index) => 
                            {
                                let odd = index % 2 == 0 ? 'double' : 'odd' 
                                return (
                                    <div className='col-lg-12'  key={index} onClick={() => handleOpenModal(item)}>
                                        <div className={`card ${odd}`}>
                                            <div className='col-lg-1'>
                                                <p>{item.category.name}</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <img src={item.image} />
                                            </div>
                                            <div className='col-lg-3'>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <p></p>
                                            </div>
                                            <div className='col-lg-2'>
                                                <p>{item.barcode}</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <p>מלאי</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <p>price</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <p>כמות</p>
                                            </div>
                                            <div className='col-lg-1'>
                                                <p>סה״כ</p>
                                            </div>
                                        </div>
                                    </div> 
                                )
                            }
                        )}
                    </div>
                }
                <div>
                    {!loading &&
                    <Pagination totalPages={totalPages} currentPage={page} onPageChange={CatalogMethods.changePage} />
                    }
                </div>
            </div>
            }

        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </>
    );
};

export default ListViewProductList;