import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Searchbar from './Searchbar';
import './Searchbar.styles.scss';

export default {
    title: 'Components/HeaderModule/Searchbar',
    component: Searchbar
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => <Searchbar/>;

export const Searchbar1 = Template.bind({});
Searchbar1.args = {
    children: '<h2>hello world</h2>'
};
