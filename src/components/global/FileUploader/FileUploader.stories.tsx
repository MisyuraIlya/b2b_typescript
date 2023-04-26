import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUploader from './FileUploader';
import './FileUploader.styles.scss';

export default {
    title: 'Global Components/FileUploader',
    component: FileUploader
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => <FileUploader {...args} />;

const change = (newDate: Date) => {
    console.log(newDate)
}


export const FileUploader1 = Template.bind({});
FileUploader1.args = {
    date:new Date(),
    onChangeDate: change
};
