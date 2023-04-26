import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';
import './Card.styles.scss';

export default {
    title: 'UI/Card',
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
    children: '<h2>hello world</h2>'
};
