import React, {FC} from 'react';

export interface CheckBoxProps {
    checked: boolean;
    id: number;
    handleCheckboxChange: (id: number) => void;
    props?: any;
}

const CheckBox: FC<CheckBoxProps> = ({checked, id, handleCheckboxChange, ...props}) => {
    return (
        <label className='switch'>
            <input
            type="checkbox"
            checked={checked}
            onClick={() => handleCheckboxChange(id)}
            {...props}
            />
            <span className='slider round'></span>
        </label>
    );
};

export default CheckBox;