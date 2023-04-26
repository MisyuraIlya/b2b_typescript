import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProduct } from '../../constructor';
import SliderContainer from './SliderContainer';
import './SliderContainer.styles.scss';

export default {
    title: 'Components/HomeModule/SliderContainer',
    component: SliderContainer
} as ComponentMeta<typeof SliderContainer>;

const Template: ComponentStory<typeof SliderContainer> = (args) => <SliderContainer/>;

export const Slider1 = Template.bind({});
Slider1.args = {};
