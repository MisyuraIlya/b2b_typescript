import React, {useState,useEffect} from 'react';
import './ListViewProductList.styles.scss'
import { useCatalog } from '../../context/CatalogProvider';
import { TailSpin } from 'react-loader-spinner';
import {AddToCart, Modal, PopUpCard} from '../../constructor';
import { IProduct, Pagination, defaultProduct } from '../../constructor';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import { useParams } from 'react-router-dom';
import ListCard from '../ListCard/ListCard';
const ListViewProductList = () => {
    const { level1, level2, level3 } = useParams(); 
    const {CatalogMethods, page, totalSize, filteredData, view} = useCatalog()
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
    const [openModal, setOpenModal] = useState(false)

    const {data, isLoading}= useQuery(['products'], () => ProductService.getByCategory(level1,level2,level3,page,totalSize))

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
                {isLoading ?
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
                        {(filteredData.length > 0 ? filteredData : data?.data)?.map((item,index) => 
                            <ListCard index={index} item={item} handleOpenModal={handleOpenModal} />
                        )}
                    </div>
                }
                <div>
                    {!isLoading && data &&
                    <Pagination totalPages={data?.totalPages} currentPage={page} onPageChange={CatalogMethods.setPage} />
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