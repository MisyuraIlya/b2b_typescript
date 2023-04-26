import React, {ButtonHTMLAttributes, FC} from 'react';
import './Button.styles.scss';
import cn from 'clsx'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'dark' | 'light'
}

const Button: FC<ButtonProps> = ({children, className , variant='light' ,...rest}) => {

    return (
        <button 
        {...rest}
        className={cn(
            'rounded-x1 font-medium px-10 py-2 shadow',{
                'text-white bg-primary' : variant === 'dark',
                'text-primary bg-white': variant === 'light'
            }, className)}
        >
            {children}
        </button>
    );
};

export default Button;