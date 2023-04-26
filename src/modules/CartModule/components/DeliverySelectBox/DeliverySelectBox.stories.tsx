import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeliverySelectBox from './DeliverySelectBox';
import './DeliverySelectBox.styles.scss';

export default {
    title: 'Components/CartModule/DeliverySelectBox',
    component: DeliverySelectBox
} as ComponentMeta<typeof DeliverySelectBox>;

const Template: ComponentStory<typeof DeliverySelectBox> = (args) => <DeliverySelectBox/>;

export const DeliverySelectBox1 = Template.bind({});
DeliverySelectBox1.args = {};
