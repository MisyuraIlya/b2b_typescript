import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DocumentList from './DocumentList';
import './DocumentList.styles.scss';

export default {
    title: 'Components/DocumentsModule/DocumentList',
    component: DocumentList
} as ComponentMeta<typeof DocumentList>;

const Template: ComponentStory<typeof DocumentList> = (args) => <DocumentList/>;

export const DocumentList1 = Template.bind({});
DocumentList1.args = {};
