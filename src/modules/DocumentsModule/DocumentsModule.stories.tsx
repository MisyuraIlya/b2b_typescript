import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DocumentsModule from './DocumentsModule';
import './DocumentsModule.styles.scss';

export default {
    title: 'Components/DocumentsModule',
    component: DocumentsModule
} as ComponentMeta<typeof DocumentsModule>;

const Template: ComponentStory<typeof DocumentsModule> = (args) => <DocumentsModule/>;

export const DocumentsModule1 = Template.bind({});
DocumentsModule1.args = {};
