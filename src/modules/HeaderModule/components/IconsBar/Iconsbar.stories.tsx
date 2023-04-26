import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Iconsbar from './Iconsbar';
import './Iconsbar.styles.scss';

export default {
    title: 'Components/HeaderModule/Iconsbar',
    component: Iconsbar
} as ComponentMeta<typeof Iconsbar>;

const Template: ComponentStory<typeof Iconsbar> = (args) => <Iconsbar/>;

export const Iconsbar1 = Template.bind({});
Iconsbar1.args = {
    children: '<h2>hello world</h2>'
};
