import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CatalogProvider } from '../../context/CatalogProvider';
import GroupViewProductList from './GroupViewProductList';
import './GroupViewProductList.styles.scss';

export default {
    title: 'Components/CatalogModule/GroupViewProductList',
    component: GroupViewProductList
} as ComponentMeta<typeof GroupViewProductList>;

const Template: ComponentStory<typeof GroupViewProductList> = (args) => <CatalogProvider><GroupViewProductList/></CatalogProvider>;

export const GroupViewProductList1 = Template.bind({});
GroupViewProductList1.args = {};
