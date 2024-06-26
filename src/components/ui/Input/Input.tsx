import React, {forwardRef} from 'react';
import './Input.styles.scss';
import {IInput} from './input.interface';
import cn from 'clsx'
const Input = forwardRef<HTMLInputElement, IInput>(
    ({placeholder, error, className, type='text', 
    style, Icon, ...rest} , ref) => {
        return (
            <div className={cn('mb-4',className)} style={style}>
                <label>
                    <span className='mb-1 block'>
                        {Icon && <Icon className='mr-3'/>}
                        {placeholder}
                    </span>
                    <input placeholder={placeholder} className={cn('px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-gray rounded', 
                    {
                        'border-red': !!error
                        
                    })} ref={ref} type={type} {...rest} />
                </label>
                {error && <div className='text-red mt-1 text-sm'>{error}</div>}
            </div>
        );
    }
)

Input.displayName = 'Input'
export default Input;