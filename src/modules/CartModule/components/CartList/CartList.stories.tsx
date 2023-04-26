import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartList from './CartList';
import './CartList.styles.scss';

export default {
    title: 'Components/CartModule/CartList',
    component: CartList
} as ComponentMeta<typeof CartList>;

const Template: ComponentStory<typeof CartList> = (args) => <CartList/>;

export const CartList1 = Template.bind({});
CartList1.args = {};
