import React, {FC, useState} from 'react';
import './InputIcon.styles.scss';
export interface InputIconProps {
    myType: string;
    placeholder: string;
    imgLink: string;
    eye: boolean;
    hookForm: any;
}

const InputIcon: FC<InputIconProps> = ({ myType, placeholder, imgLink, eye, hookForm, ...props}) => {
    const [type, setType] = useState(myType)
    const handleType = () => {
        if(type === 'text'){
            setType('password')
        } else {
            setType('text')
        }
    }
    return (
        <div className='InputIcon'>
            <input {...props} type={type} placeholder={placeholder} {...hookForm}/>
            {
                eye   
                ? 
                <div className='imgBlock' onClick={() => handleType()}>
                    <img src={'https://lfayou.com/src/img/icons/eye.svg'}/>
                </div>
                :
                <div className='imgBlock'  onClick={() => handleType()}>
                    <img src={'https://lfayou.com/src/img/icons/hide.svg'}/>
                </div>

            }
        </div>
    );
};

export default InputIcon;