import React, { FC } from 'react';
import './Description.styles.scss';
const Description: FC<{
    children: string
    className?: string
}> = ({ children, className = '' }) => {
    return (
        <p className={`Description ${className}`}>
            {children}
        </p>
    );
};

export default Description;
