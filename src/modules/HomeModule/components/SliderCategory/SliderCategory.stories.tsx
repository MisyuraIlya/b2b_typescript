import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderCategory from './SliderCategory';
import './SliderCategory.styles.scss';

export default {
    title: 'Components/HomeModule/SliderCategory',
    component: SliderCategory
} as ComponentMeta<typeof SliderCategory>;


const Template: ComponentStory<typeof SliderCategory> = (args) => <SliderCategory slides={3} data={[]}/>;

export const Slider1 = Template.bind({});
Slider1.args = {};
