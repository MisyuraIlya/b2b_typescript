import React, {FC, useState} from 'react';
import './SelectBox.styles.scss';

  export interface Option {
    value: string;
    label: string;
  }
  
  export interface SelectBoxProps {
    options: Option[];
    onSelect: (value: string) => void;
  }

  const SelectBox: FC<SelectBoxProps> = ({ options, onSelect }) => {
  
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
    const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
  
    const handleOptionClick = (optionValue: string) => {
      setSelectedOption(optionValue);
      setIsOptionsVisible(false);
      onSelect(optionValue);
    };
  
    const handleSelectBoxClick = () => {
      setIsOptionsVisible(!isOptionsVisible);
    };
  
    return (
      <div className="select-box">
        <div className="selected-option" onClick={handleSelectBoxClick}>
          {options.find((option) => option.value === selectedOption)?.label}
          <img src='https://churishop.co.il//src/img/icons/down-chevron.svg' />

        </div>
        {isOptionsVisible && (
          <div className="options">
            {options.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default SelectBox;
