import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button2 from './Button2';

export default {
    title: 'UI/Button2',
    component: Button2
} as ComponentMeta<typeof Button2>;

const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    Primary: true,
    children: 'Какой то текст1'
};

export const Secondary = Template.bind({});
Secondary.args = {
    Primary: false,
    children: 'Какой то текст1'
};

