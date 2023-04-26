import React from 'react';
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

interface Inputs {
    email: string;
    password: string;
    passwordRepeat: string;
};

const RegistrationPage = () => {
    const { register, handleSubmit, formState: { errors },control } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const password = useWatch({
        name: "password",
        control,
        defaultValue: "",
      });
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email',{
                required:'Email is require field!',
                pattern: {
                    value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:'please Enter valid email!'
                }
                })}
                type="text"
                placeholder='Email'
                />
                        {errors?.email && <div style={{color:'red'}}>{errors.email.message}</div>}

                <input
                type="password"
                {...register("password", {
                    required: "This field is required",
                    minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                    },
                })}
                />

                {errors.password && <p>{errors.password.message}</p>}
                <input
                type="password"
                {...register("passwordRepeat", {
                    validate: (value: string) => value === password || "The passwords do not match",
                })}
                />
                {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default RegistrationPage;