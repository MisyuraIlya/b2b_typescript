import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedBtn = Template.bind({});
// RedBtn.args = {
//     color: 'blue',
//     children: 'Какой то текст1'
// };

// export const OrangeBtn = Template.bind({});
// OrangeBtn.args = {
//     color: 'orange',
//     children: 'Какой то текст2'
// };

// export const BigBtn = Template.bind({});
// BigBtn.args = {
//     color: 'orange',
//     big: true,
//     children: 'Какой то текст3'
// };