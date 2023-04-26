import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import AuthLayout from './AuthLayout';
// import './index.styles.scss';

export default {
    title: 'Components/AuthModule/AuthLayout',
    component: AuthLayout
} as ComponentMeta<typeof AuthLayout>;

const Template: ComponentStory<typeof AuthLayout> = (args) => <AuthProvider><AuthLayout {...args}/></AuthProvider>;

export const AuthLayOut = Template.bind({});
AuthLayOut.args = {};
