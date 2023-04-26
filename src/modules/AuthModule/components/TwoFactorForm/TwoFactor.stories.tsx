import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthProvider } from '../../provider/AuthProvider';
import TwoFactor from './TwoFactor';

export default {
    title: 'Components/AuthModule/TwoFactor',
    component: TwoFactor
} as ComponentMeta<typeof TwoFactor>;

const Template: ComponentStory<typeof TwoFactor> = (args) => <AuthProvider><TwoFactor/></AuthProvider>;

export const TwoFactor1 = Template.bind({});
TwoFactor1.args = {};
