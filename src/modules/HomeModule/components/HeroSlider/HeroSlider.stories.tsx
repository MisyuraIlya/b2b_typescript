import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeroSlider from './HeroSlider';
import './HeroSlider.styles.scss';

export default {
    title: 'Components/HomeModule/HeroSlider',
    component: HeroSlider
} as ComponentMeta<typeof HeroSlider>;

const Template: ComponentStory<typeof HeroSlider> = (args) => <HeroSlider/>;

export const HeroSlider1 = Template.bind({});
HeroSlider1.args = {
    children: '<h2>hello world</h2>'
};
