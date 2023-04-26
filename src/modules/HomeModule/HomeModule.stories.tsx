import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeModule from './HomeModule';
import './HomeModule.styles.scss';

export default {
    title: 'Components/HomeModule',
    component: HomeModule
} as ComponentMeta<typeof HomeModule>;

const Template: ComponentStory<typeof HomeModule> = (args) => <HomeModule/>;

export const HomeModule1 = Template.bind({});
HomeModule1.args = {
    children: '<h2>hello world</h2>'
};
