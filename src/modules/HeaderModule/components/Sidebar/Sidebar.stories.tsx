import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from './Sidebar';
import './Sidebar.styles.scss';

export default {
    title: 'Components/HeaderModule/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar/>;

export const Sidebar1 = Template.bind({});
Sidebar1.args = {
    children: '<h2>hello world</h2>'
};
