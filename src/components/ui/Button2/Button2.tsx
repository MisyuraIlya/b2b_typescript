import React, {FC} from 'react';
import './Button2.styles.scss';
export interface ButtonProps {
    children: any;
    Primary: boolean
}

const Button2: FC<ButtonProps> = ({children, Primary, ...props}) => {

    return (
        <div className={`${Primary ? 'Button2_primary': 'Button2_secondary'}`} {...props}>
            <p>{children}</p>
        </div>
    );
};

export default Button2;