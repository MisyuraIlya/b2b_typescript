import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import RestorePasswordForm from './RestorePasswordForm';

export default {
    title: 'Components/AuthModule/RestorePasswordForm',
    component: RestorePasswordForm
} as ComponentMeta<typeof RestorePasswordForm>;

const Template: ComponentStory<typeof RestorePasswordForm> = (args) => <AuthProvider><RestorePasswordForm/></AuthProvider>;

export const RestorePasswordForm1 = Template.bind({});
RestorePasswordForm1.args = {};
