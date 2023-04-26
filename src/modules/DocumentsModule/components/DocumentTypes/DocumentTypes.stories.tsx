import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DocumentTypes from './DocumentTypes';
import './DocumentTypes.styles.scss';

export default {
    title: 'Components/DocumentsModule/DocumentTypes',
    component: DocumentTypes
} as ComponentMeta<typeof DocumentTypes>;

const Template: ComponentStory<typeof DocumentTypes> = (args) => <DocumentTypes/>;

export const DocumentTypes1 = Template.bind({});
DocumentTypes1.args = {};
