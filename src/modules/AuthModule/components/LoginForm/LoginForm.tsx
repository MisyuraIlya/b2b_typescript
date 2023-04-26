//globals
import React from 'react';
import { useForm } from "react-hook-form";
//locals
import './LoginForm.styles.scss';
import { Input, Button, InputIcon } from '../../constructor';
import { useAuth } from '../../provider/AuthProvider';
type Inputs = {
    userExId: string,
    phone: string,
  };

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {AuthMethods} = useAuth()
    const handleClick = (data: Inputs) => {
        AuthMethods.LoginRequest()
    }

    return (
        <div className='LoginForm'>
            <form onSubmit={handleSubmit(handleClick)}>
                <div className='field'>
                    {/* <Input hookForm={{...register("userExId")}} type='text' placeholder='username'/> */}
                </div>
                <div className='field'>
                    <InputIcon hookForm={{...register("phone")}} eye={true} myType='password' placeholder='password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                </div>
                <div className='button'>
                    <Button variant='dark'>Validate</Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;