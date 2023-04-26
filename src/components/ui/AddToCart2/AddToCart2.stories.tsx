import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddToCart2 from './AddToCart2';

export default {
    title: 'UI/AddToCart2',
    component: AddToCart2
} as ComponentMeta<typeof AddToCart2>;

const Template: ComponentStory<typeof AddToCart2> = (args) => <AddToCart2 {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    // TODO
    // Primary: true,
    // children: 'Какой то текст1'
};


