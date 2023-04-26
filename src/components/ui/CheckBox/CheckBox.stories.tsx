import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from './CheckBox';
import './CheckBox.styles.scss';

export default {
    title: 'UI/CheckBox',
    component: CheckBox
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const CheckBox1 = Template.bind({});
CheckBox1.args = {
    checked: true,
    id: 1,
    handleCheckboxChange(id) {
        console.log(id)
    },
};

export const CheckBox2 = Template.bind({});
CheckBox1.args = {
    checked: false,
    id: 2,
    handleCheckboxChange(id) {
        console.log(id)
    },
};
