import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox2 from './CheckBox2';
import './CheckBox2.styles.scss';

export default {
    title: 'UI/CheckBox2',
    component: CheckBox2
} as ComponentMeta<typeof CheckBox2>;

const Template: ComponentStory<typeof CheckBox2> = (args) => <CheckBox2 {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {

};

