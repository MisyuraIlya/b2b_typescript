import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar';
import './SearchBar.styles.scss';

export default {
    title: 'Components/DocumentsModule/SearchBar',
    component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar/>;

export const SearchBar1 = Template.bind({});
SearchBar1.args = {};
