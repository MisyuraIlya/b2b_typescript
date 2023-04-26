import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import ValidationForm from './ValidationForm';

export default {
    title: 'Components/AuthModule/ValidationForm',
    component: ValidationForm
} as ComponentMeta<typeof ValidationForm>;

const Template: ComponentStory<typeof ValidationForm> = (args) => <AuthProvider><ValidationForm/></AuthProvider>;

export const Registration = Template.bind({});
Registration.args = {};
