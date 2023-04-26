import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import CatalogModule from './CatalogModule';

export default {
    title: 'Components/CatalogModule',
    component: CatalogModule
} as ComponentMeta<typeof CatalogModule>;

const queryClient = new QueryClient()
const Template: ComponentStory<typeof CatalogModule> = (args) => <QueryClientProvider client={queryClient}><CatalogModule/></QueryClientProvider>;

export const CatalogModule1 = Template.bind({});
CatalogModule1.args = {};
