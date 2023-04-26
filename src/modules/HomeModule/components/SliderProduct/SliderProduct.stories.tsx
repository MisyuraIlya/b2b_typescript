import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProduct } from '../../constructor';
import SliderProduct from './SliderProduct';
import './SliderProduct.styles.scss';

export default {
    title: 'Components/HomeModule/SliderProduct',
    component: SliderProduct
} as ComponentMeta<typeof SliderProduct>;

const Template: ComponentStory<typeof SliderProduct> = (args) => <SliderProduct slides={3} data={[]}/>;

export const Slider1 = Template.bind({});
Slider1.args = {};
