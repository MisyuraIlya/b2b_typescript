import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListViewProductList from './ListViewProductList';
import './ListViewProductList.styles.scss';

export default {
    title: 'Components/CatalogModule/ListViewProductList',
    component: ListViewProductList
} as ComponentMeta<typeof ListViewProductList>;

const Template: ComponentStory<typeof ListViewProductList> = (args) => <ListViewProductList/>;

export const ListViewProductList1 = Template.bind({});
ListViewProductList1.args = {};
