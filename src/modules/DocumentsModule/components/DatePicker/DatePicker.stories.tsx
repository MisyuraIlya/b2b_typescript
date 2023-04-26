import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from './DatePicker';
import './DatePicker.styles.scss';

export default {
    title: 'Components/DocumentsModule/DatePicker',
    component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker/>;

export const DatePicker1 = Template.bind({});
DatePicker1.args = {};
