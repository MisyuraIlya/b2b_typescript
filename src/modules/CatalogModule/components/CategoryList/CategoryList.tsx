import React, {FC, useState} from 'react';
import { useCatalog } from '../../context/CatalogProvider';
import { SubHeading, ICategory } from '../../constructor';
import './CategoryList.styles.scss';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ProductService } from '@/services/product/product.service';
import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '../../constructor';
export interface mockCategorylvl1 {
    id: number
    name:string
    lvl2:mockCategorylvl2[]
}
export interface mockCategorylvl2 {
    id: number
    name:string
    lvl3:mockCategorylvl3[]
}
export interface mockCategorylvl3 {
    id: number
    name:string
}
export interface CategoryListProps{
    categories:mockCategorylvl1[]
}


const CategoryList: FC = () => {

    const {data, isLoading}= useQuery(['category'], () => CategoryService.getAll())
    const navigate = useNavigate()
    const { level3 } = useParams();


    return (
        <Sidebar rtl={true} className='bg-white rounded-lg'>
            <div className='myCenter py-2'>
                <SubHeading title='קטגוריות'/>
            </div>
            <Menu>
                {data?.map((item,index) => 
                    <SubMenu label={item.name} key={index} onClick={() => navigate(`/catalog/${item.id}/0/0`)}>
                        {item?.children?.map((lvl2,index2) => 
                            <SubMenu label={lvl2.name} key={index2} onClick={() => navigate(`/catalog/${item.id}/${lvl2.id}/0`)}>
                                {lvl2?.children?.map((lvl3, index3) =>
                                     <MenuItem className={`${level3 !== undefined && parseInt(level3) === lvl3.id ? 'text-primary' : 'text-secondary'}`} key={index3} onClick={() => navigate(`/catalog/${item.id}/${lvl2.id}/${lvl3.id}`)}>{lvl3.name}</MenuItem>
                                )}
                            </SubMenu>      
                        )}
                    </SubMenu>
                )}
            </Menu>
        </Sidebar>
    );
};

export default CategoryList;