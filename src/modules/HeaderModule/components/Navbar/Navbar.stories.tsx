import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './Navbar';
import './Navbar.styles.scss';

export default {
    title: 'Components/HeaderModule/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar/>;

export const Navbar1 = Template.bind({});
Navbar1.args = {
    children: '<h2>hello world</h2>'
};
