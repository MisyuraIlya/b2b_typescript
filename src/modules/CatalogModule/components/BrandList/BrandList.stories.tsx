import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CatalogProvider } from '../../context/CatalogProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import BrandList from './BrandList';
import './BrandList.styles.scss';

export default {
    title: 'Components/CatalogModule/BrandList',
    component: BrandList
} as ComponentMeta<typeof BrandList>;

const Template: ComponentStory<typeof BrandList> = (args) => <CatalogProvider><BrandList/></CatalogProvider>;

export const BrandList1 = Template.bind({});
BrandList1.args = {};
