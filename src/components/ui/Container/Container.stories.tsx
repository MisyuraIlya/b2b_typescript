import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from './Container';
import './Container.styles.scss';

export default {
    title: 'UI/Container',
    component: Container
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Container1 = Template.bind({});
Container1.args = {
    children: '<h2>hello world</h2>'
};
