import React, {FC} from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormInputs {
    email: string;
    password: string;
}

const LoginPage: FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);
        // Your logic for submitting the login form goes here
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    id="email"
                    {...register("email", {
                        required: 'Email is required',
                    })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    {...register("password", { required: 'Password is required' })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;