import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectBox from './SelectBox';
import './SelectBox.styles.scss';

export default {
    title: 'UI/SelectBox',
    component: SelectBox
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />;

const select = (id:string) => {
    console.log(id)
}


export const SelectBox1 = Template.bind({});
SelectBox1.args = {
    options:[{value:'1', label:'1'}, {value:'2', label:'2'}],
    onSelect:select
};
