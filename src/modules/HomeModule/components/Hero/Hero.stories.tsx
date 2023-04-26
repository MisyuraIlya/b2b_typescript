import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hero from './Hero';
import './Hero.styles.scss';

export default {
    title: 'Components/HomeModule/Hero',
    component: Hero
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero/>;

export const Hero1 = Template.bind({});
Hero1.args = {
    children: '<h2>hello world</h2>'
};
