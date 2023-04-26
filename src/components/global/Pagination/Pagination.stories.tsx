import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';
import './Pagination.styles.scss';

export default {
    title: 'Global Components/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

const changePage = (page: number) => {
    console.log(page)
}

export const Pagination1 = Template.bind({});
Pagination1.args = {
    totalPages:10,
    currentPage:1,
    onPageChange:changePage
};
