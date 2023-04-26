import React, {FC} from 'react';
import './AuthLayout.styles.scss';
export interface AuthLayoutProps {
    children: any;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {

    return (
        <div className='AuthLayout'>
            <div className='flex-container'>
                <div className='col-lg-4'>
                    <img src='https://lfayou.com/src/img/popup.jpg' />
                </div>
                <div className='col-lg-8'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;