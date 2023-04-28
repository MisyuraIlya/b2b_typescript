import React from 'react';
import { SelectBox } from '../../constructor';
import { MdFormatListBulleted, MdWindow } from "react-icons/md";
import { Input } from '../../constructor';
import { useForm } from "react-hook-form";
import { useCatalog } from '../../context/CatalogProvider';
import {SearchInput} from '../../constructor';
import './HeadOptions.styles.scss';

import { FaSearch } from 'react-icons/fa';
const mockData = {id:1, total:'123'}


const HeadOptions = () => {
    const {CatalogMethods, searchValue, totalItems, view, page} = useCatalog()
    
    const select = (id:string) => {
        CatalogMethods.setTotalSize(parseInt(id))
    }
    const select2 = (id:string) => {
        console.log(id)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        CatalogMethods.setSearchValue(event.target.value);
      }
    return (
        <div className='HeadOptions'>
            <div className='flex-container content'>
                <div className='col-lg-2 center'>
                    <p>נמצאו: {totalItems} מוצרים</p>
                </div>
                <div className='col-lg-4 center'>
                    <div className='search'>
                        <SearchInput searchState={searchValue} onSearchChange={handleSearchChange}/>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='box'>
                        <p>מוצרים: </p>
                        <div className='selectBox'>
                            <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <div className='box'>
                        <p>מיון: </p>
                        <div className='selectBox'>
                            <SelectBox options={[{value:'1', label:'1'}, {value:'2', label:'2'}]} onSelect={select2}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 center'>
                    <p>תצוגה:</p>
                    <div className='views'>
                        <div className={`icon ${view ? 'selected' : null}`}>
                            <MdFormatListBulleted size={24} onClick={() => CatalogMethods.setView(true)}/>
                        </div>
                        <div className={`icon ${view ? null : 'selected'}`}>
                            <MdWindow size={24} onClick={() => CatalogMethods.setView(false)}/>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default HeadOptions;