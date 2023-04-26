import React, {FC} from 'react';
import './Container.styles.scss'
export interface ContainerProps {
    children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className='container mx-auto px-64 py-12'>
            {children}
        </div>
    );
};

export default Container;