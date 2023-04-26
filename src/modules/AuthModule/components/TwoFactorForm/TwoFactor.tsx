//globals
import React from 'react';
import { useForm } from "react-hook-form";

//locals
import './TwoFactor.styles.scss';
import { Input, Button, InputIcon } from '../../constructor';
import { useAuth } from '../../provider/AuthProvider';

type Inputs = {
    email: string,
};

const TwoFactor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const {AuthMethods} = useAuth()

    const handleClick = (data: Inputs) => {
        AuthMethods.ValidationRequest()
    }

    return (
        <div className='TwoFactor'>
            <form onSubmit={handleSubmit(handleClick)}>
                <div className='field'>
                    <InputIcon hookForm={{...register("email")}} eye={true} myType='text' placeholder='email' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                </div>
                <div className='button'>
                    <Button variant='dark'>Validate</Button>
                </div>
            </form>
        </div>
    );
};

export default TwoFactor;