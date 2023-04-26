import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderModule from './HeaderModule';
import './HeaderModule.styles.scss';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  
export default {
    title: 'Components/HeaderModule',
    component: HeaderModule
} as ComponentMeta<typeof HeaderModule>;

const Template: ComponentStory<typeof HeaderModule> = (args) => <QueryClientProvider client={queryClient}><HeaderModule/></QueryClientProvider>;
const queryClient = new QueryClient()
export const HeaderModule1 = Template.bind({});
HeaderModule1.args = {
    children: '<h2>hello world</h2>'
};
