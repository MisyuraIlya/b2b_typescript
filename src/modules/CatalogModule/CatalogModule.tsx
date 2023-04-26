import React, { useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import HeadOptions from './components/HeadOptions/HeadOptions';
import BrandList from './components/BrandList/BrandList';
import { CatalogProvider } from './context/CatalogProvider';
import './CatalogModule.styles.scss';
import ListViewProductList from './components/ListViewProductList/ListViewProductList';
import GroupViewProductList from './components/GroupViewProductList/GroupViewProductList';
import { Container } from './constructor';
const CatalogModule = () => {

    return (
            <CatalogProvider>
                <Container>
                    <div className='CatalogModule'>
                        <div className='flex-container'>
                            <div className='col-lg-3'>
                                <CategoryList/>
                                <BrandList/>
                            </div>
                            <div className='col-lg-9'>
                                <HeadOptions/>
                                <ListViewProductList/>
                                <GroupViewProductList/>
                            </div>
                        </div>
                    </div>
                </Container>
            </CatalogProvider>
    );
};

export default CatalogModule;