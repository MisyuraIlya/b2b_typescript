//globals
import React from 'react';
import { useForm } from "react-hook-form";

//locals
import './RestorePasswordForm.styles.scss';
import { Input, Button } from '../../constructor';
import { useAuth } from '../../provider/AuthProvider';

type Inputs = {
    password: string,
    secondPassword: string
};

const RestorePasswordForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const {AuthMethods} = useAuth()

    const handleClick = (data: Inputs) => {
        AuthMethods.ValidationRequest()
    }

    return (
        <div className='RestorePasswordForm'>
            <form onSubmit={handleSubmit(handleClick)}>
                <div className='field'>
                    {/* <Input hookForm={{...register("password")}} type='password' placeholder='password'/> */}
                </div>
                <div className='field'>
                    {/* <Input hookForm={{...register("secondPassword")}} type='password' placeholder='secondPassword'/> */}
                </div>
                <div className='button'>
                    <Button variant='dark'>Validate</Button>
                </div>
            </form>
        </div>
    );
};

export default RestorePasswordForm;