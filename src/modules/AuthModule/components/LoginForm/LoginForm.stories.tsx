import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import LoginForm from './LoginForm';

export default {
    title: 'Components/AuthModule/LoginForm',
    component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <AuthProvider><LoginForm/></AuthProvider>;

export const Login = Template.bind({});
Login.args = {};
