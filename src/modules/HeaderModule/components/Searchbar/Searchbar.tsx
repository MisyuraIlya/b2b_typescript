import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";
import './Searchbar.styles.scss';
import { useHeader } from '../../context/HeaderProvider';
import { IProduct } from '../../constructor';
import {Modal, PopUpCard, defaultProduct} from '../../constructor';
const mockData = [
    {id:1, title:'product a', sku:'1', price:10},
    {id:2, title:'product b', sku:'2', price:11},
    {id:2, title:'product c', sku:'3', price:12},
]
const Searchbar = () => {
    const [active, setActive] = useState(mockData)
    const {HeaderMethods, searchValue, searchContent} = useHeader()
    const [choosedProduct, setChoosedProduct] = useState<IProduct>(defaultProduct);
    const [openModal, setOpenModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false)
    }
    const handleOpenModal = (item: IProduct) => {
        setOpenModal(true)
        HeaderMethods.setSearchValue('')
        setChoosedProduct(item)
    }
    return (
        <>
        <div className='searchModule'>
            <div className='Searchbar'>
                <input type='text' placeholder='search' value={searchValue} onChange={(e) => HeaderMethods.setSearchValue(e.target.value)}/>
                <MdSearch/>
                {active && searchValue &&
                <div className='modal'>
                    <div className="list">
                        {searchContent?.map((item,key) => 
                            <div key={key}  className='item flex-container' onClick={() => handleOpenModal(item)}>
                                <div className='img_content col-lg-3 center'>
                                    <img src={'https://amit-pastry-b2b.com/src/img/placeholder.jpg'} />
                                </div>    
                                <div className='content col-lg-9'>
                                    <p className='title'>{item?.name}</p>
                                    <p className='catalog'>{item?.sku}</p>
                                    <p className='price'>{item?.price?.price}</p>
                                </div> 
                            </div>    
                        )}
                    </div>       
                </div>
                }
            </div>
        </div>
        <Modal isOpen={openModal} onClose={handleClose}>
            <PopUpCard data={choosedProduct}/>
        </Modal>
        </>


    );
};

export default Searchbar;