import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyCalendar from './MyCalendar';
import './MyCalendar.styles.scss';

export default {
    title: 'Global Components/MyCalendar',
    component: MyCalendar
} as ComponentMeta<typeof MyCalendar>;

const Template: ComponentStory<typeof MyCalendar> = (args) => <MyCalendar {...args} />;

const change = (newDate: Date) => {
    console.log(newDate)
}


export const MyCalendar1 = Template.bind({});
MyCalendar1.args = {
    date:new Date(),
    onChangeDate: change
};
