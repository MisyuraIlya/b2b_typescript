import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import RegistrationForm from './RegistrationForm';
// import './index.styles.scss';

export default {
    title: 'Components/AuthModule/RegistrationForm',
    component: RegistrationForm
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <AuthProvider><RegistrationForm/></AuthProvider>;

export const Registration = Template.bind({});
Registration.args = {};
