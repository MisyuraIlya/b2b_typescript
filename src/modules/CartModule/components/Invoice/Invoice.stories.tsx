import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Invoice from './Invoice';
import './Invoice.styles.scss';

export default {
    title: 'Components/CartModule/Invoice',
    component: Invoice
} as ComponentMeta<typeof Invoice>;

const Template: ComponentStory<typeof Invoice> = (args) => <Invoice/>;

export const Invoice1 = Template.bind({});
Invoice1.args = {};
