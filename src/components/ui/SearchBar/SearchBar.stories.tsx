import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './SearchBar';
import './SearchBar.styles.scss';

export default {
    title: 'UI/SearchBar',
    component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const SearchBar1 = Template.bind({});
SearchBar1.args = {
    products:[{id:1, name:'productA', description:'title'},{id:2, name:'productB', description:'title'}],
};
