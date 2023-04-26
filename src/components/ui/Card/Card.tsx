import React, {FC} from 'react';

export interface CardProps {
    children: any;
}

const Card: FC<CardProps> = ({ children }) => {
    return (
        <div className='Card'>
            {children}
        </div>
    );
};

export default Card;