import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
import './Header.styles.scss';
export default {
    title: 'Layout/Header',
    component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header/>;

export const Base = Template.bind({});
Base.args = {};
