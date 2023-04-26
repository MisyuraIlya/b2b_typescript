//globals
import React from 'react';
import { useForm } from "react-hook-form";

//locals
import './ValidationFom.styles.scss';
import { Input, Button, InputIcon } from '../../constructor';
import { useAuth } from '../../provider/AuthProvider';

type Inputs = {
    userExId: string,
    phone: string,
  };

const ValidationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {AuthMethods} = useAuth()
    const handleClick = (data: Inputs) => {
        AuthMethods.ValidationRequest()
    }

    return (
        <div className='ValidationForm'>
            <form onSubmit={handleSubmit(handleClick)}>
                <div className='field'>
                    {/* <Input hookForm={{...register("userExId")}} type='text' placeholder='userExId'/> */}
                </div>
                <div className='field'>
                    {/* <InputIcon hookForm={{...register("phone")}} eye={true} myType='text' placeholder='phone' imgLink={'https://lfayou.com/src/img/icons/eye.svg'}/> */}
                </div>
                <div className='button'>
                    <Button variant='dark'>Validate</Button>
                </div>
            </form>
        </div>
    );
};

export default ValidationForm;