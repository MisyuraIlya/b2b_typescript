import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';
import './Input.styles.scss';

export default {
    title: 'UI/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Input1 = Template.bind({});
Input1.args = {
    type: 'text',
    placeholder: 'text1'
};
