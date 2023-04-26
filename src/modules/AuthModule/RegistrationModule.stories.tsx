import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AuthModule from './AuthModule';
// import './index.styles.scss';

export default {
    title: 'Components/AuthModule',
    component: AuthModule
} as ComponentMeta<typeof AuthModule>;

const Template: ComponentStory<typeof AuthModule> = (args) => <AuthModule/>;

export const Registration = Template.bind({});
Registration.args = {};
