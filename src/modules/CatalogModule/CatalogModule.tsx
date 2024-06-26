import React, { useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import HeadOptions from './components/HeadOptions/HeadOptions';
import BrandList from './components/BrandList/BrandList';
import { CatalogProvider } from './context/CatalogProvider';
import './CatalogModule.styles.scss';
import ListViewProductList from './components/ListViewProductList/ListViewProductList';
import GroupViewProductList from './components/GroupViewProductList/GroupViewProductList';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Container } from './constructor';
const CatalogModule = () => {

    return (
        <ProSidebarProvider>
            <CatalogProvider>
                <div className='CatalogModule container mx-auto px-4'>
                    <div className='flex-container'>
                        <div className='col-lg-3 py-12'>
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
            </CatalogProvider>
        </ProSidebarProvider>
    );
};

export default CatalogModule;