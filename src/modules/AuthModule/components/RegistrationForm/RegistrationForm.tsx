//global
import React from 'react';
import { useForm } from "react-hook-form";
//Locals
import { Input, Button, InputIcon } from '../../constructor';
import './RegistrationForm.styles.scss';
import ValidationForm from '../ValidationForm/ValidationForm';
import { APP_CONFIG } from '../../constructor';
import { useAuth } from '../../provider/AuthProvider';

type Inputs = {
    mail: string,
    password: string,
    secondPassword: string,
  };

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {allowRegister, AuthMethods} = useAuth()
    const handleClick = (data: Inputs) => {
        AuthMethods.RegistrationRequest()
    }
    return (
        <>
        {APP_CONFIG.authValidation && !allowRegister && <ValidationForm/>}
        {(allowRegister || !APP_CONFIG.authValidation) && 
            <div className='RegistrationForm'>
                <form onSubmit={handleSubmit(handleClick)}>
                    <div className='field'>
                        {/* <Input hookForm={{...register("mail")}} type='text' placeholder='username'/> */}
                    </div>
                    <div className='field'>
                        <InputIcon hookForm={{...register("password")}} eye={true} myType='password' placeholder='password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                    </div>
                    <div className='field'>
                        <InputIcon hookForm={{...register("secondPassword")}} eye={true} myType='password' placeholder='second password' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/>
                    </div>
                    <div className='button'>
                        <Button variant='dark'>Registration</Button>
                    </div>
                </form>
            </div>
        }

        </>

    );
};

export default RegistrationForm;