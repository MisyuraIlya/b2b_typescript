import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartModule from './CartModule';
import './CartModule.styles.scss';

export default {
    title: 'Components/CartModule',
    component: CartModule
} as ComponentMeta<typeof CartModule>;

const Template: ComponentStory<typeof CartModule> = (args) => <CartModule/>;

export const CartModule1 = Template.bind({});
CartModule1.args = {};
