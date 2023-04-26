import React, { useState } from 'react';
import './CheckBox2.styles.scss';
interface CheckBox2Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox2: React.FC<CheckBox2Props> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckBox2Change = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div onClick={handleCheckBox2Change} className="CheckBox2">
        <div className={`${isChecked ? 'checked' : ''}`}>
            {isChecked && 
                <img src="https://churishop.co.il//src/img/icons/done.svg" />        
            }
        </div>
    </div>
  );
};

export default CheckBox2;
