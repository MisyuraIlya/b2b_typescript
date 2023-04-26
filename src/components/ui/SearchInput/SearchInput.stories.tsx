import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';
import './SearchInput.styles.scss';

export default {
    title: 'UI/SearchInput',
    component: SearchInput
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

const select = (id:string) => {
    console.log(id)
}


export const SearchInput1 = Template.bind({});
SearchInput1.args = {
    // searchState={'as'},
    // onSearchChange={}
};
