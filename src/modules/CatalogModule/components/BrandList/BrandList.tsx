import React, {FC, useState} from 'react';
import UseAnimations from 'react-useanimations';
import radioButton from 'react-useanimations/lib/radioButton'
import './BrandList.styles.scss';
export interface brandProds {
    id: number
    name:string
}

const mock = [
    {id:1, name:'barndA'},
    {id:2, name:'brandB'},
    {id:3, name:'brandC'},
]

const BrandList: FC = () => {

    return (
        <div className='BrandList'>
            {mock?.map((item,index) => 
                <div key={index} className="brand">
                    <UseAnimations 
                    animation={radioButton}
                    onClick={() => console.log('1')}
                    size={25}
                    speed={3}
                    /> 
                    <span>{item.name}</span>
                </div>    
            )}
        </div>
    );
};

export default BrandList;