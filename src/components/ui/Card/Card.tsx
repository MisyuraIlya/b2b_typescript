import React, {FC} from 'react';
import cn from 'clsx'
export interface CardProps {
    children: any;
    className?: string
}

const Card: FC<CardProps> = ({ className, children }) => {
    return (
        <div className={cn('shadow-md  rounded-md' ,className)}>
            {children}
        </div>
    );
};

export default Card;