import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';
import './TextArea.styles.scss';

export default {
    title: 'UI/TextArea',
    component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextArea1 = Template.bind({});
TextArea1.args = {
    // searchState={'as'},
    // onSearchChange={}
};
