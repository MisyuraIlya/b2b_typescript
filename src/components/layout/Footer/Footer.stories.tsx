import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';
import './Footer.styles.scss';
export default {
    title: 'Layout/Footer',
    component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer/>;

export const Footer1 = Template.bind({});
Footer1.args = {};
