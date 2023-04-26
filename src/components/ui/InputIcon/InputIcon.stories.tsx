import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputIcon from './InputIcon';
import './InputIcon.styles.scss';

export default {
    title: 'UI/InputIcon',
    component: InputIcon
} as ComponentMeta<typeof InputIcon>;

const Template: ComponentStory<typeof InputIcon> = (args) => <InputIcon {...args} />;

export const InputIcon1 = Template.bind({});
InputIcon1.args = {
    placeholder: 'text1'
};
