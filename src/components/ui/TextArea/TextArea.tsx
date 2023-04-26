import React, { ChangeEvent } from 'react';
import './TextArea.styles.scss'
interface TextAreaProps {
  name: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className='TextArea'>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
