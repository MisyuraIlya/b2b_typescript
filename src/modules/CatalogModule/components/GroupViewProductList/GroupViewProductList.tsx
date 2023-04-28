import React, { useEffect, useState } from 'react';
import './GroupViewProductList.styles.scss'
import { useCatalog } from '../../context/CatalogProvider';
import { TailSpin } from 'react-loader-spinner';
import { IProduct, Pagination , defaultProduct} from '../../constructor';
import {Modal, PopUpCard, AddToCart} from '../../constructor';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/product/product.service';
import GroupCard from '../GroupCard/GroupCard';
const GroupViewProductList = () => {
    const {CatalogMethods, page, totalSize, filteredData, view} = useCatalog()
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
    const [openModal, setOpenModal] = useState(false)
    
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenModal = (item: IProduct) => {
        setOpenModal(true)
        setChoosedProduct(item)
    }
    const { level1, level2, level3 } = useParams();

    const {data, isLoading ,refetch}= useQuery(['products'], () => ProductService.getByCategory(level1,level2,level3,page,totalSize))

    useEffect(() => {
        refetch()
        if(data){
            CatalogMethods.setTotalItems(data?.totalItems)
        }
    },[level1, level2, level3, totalSize, page])

    useEffect(() => {
        if(filteredData && data) {
            CatalogMethods.filterProducts(data?.data)
        }
    },[filteredData])
    return (
        <>
        {!view && 
        <>
        <div className='GroupViewProductList'>
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
            <>
            <div className='grid grid-cols-4 gap-4 py-6'>
                {(filteredData.length > 0 ? filteredData : data?.data)?.map((item,index) => 
                    <div key={index}>
                        <GroupCard item={item} handleOpenModal={handleOpenModal}/>
                    </div>    
                )}
            </div>
            </>
            }

        </div>
        {!isLoading && data &&
            <Pagination totalPages={data?.totalPages} currentPage={page} onPageChange={CatalogMethods.setPage} />
        }
        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </>
        }

        </>

    );
};

export default GroupViewProductList;