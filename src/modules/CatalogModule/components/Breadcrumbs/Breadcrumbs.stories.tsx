import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CatalogProvider } from '../../context/CatalogProvider';
import Breadcrumbs from './Breadcrumbs';
import './Breadcrumbs.styles.scss';

export default {
    title: 'Components/CatalogModule/Breadcrumbs',
    component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <CatalogProvider><Breadcrumbs/></CatalogProvider>;

export const Breadcrumbs1 = Template.bind({});
Breadcrumbs1.args = {};
