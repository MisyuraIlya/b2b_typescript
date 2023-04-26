import React, { FC } from 'react';
import './SubHeading.styles.scss';
const SubHeading: FC<{
    title: string
    className?: string
}> = ({ title, className = '' }) => {
    return (
        <h2 className={`SubHeading ${className}`}>
            {title}
        </h2>
    );
};

export default SubHeading;
