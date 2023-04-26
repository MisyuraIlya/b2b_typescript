import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import './Modal.styles.scss';

export default {
    title: 'Global Components/Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Modal1 = Template.bind({});
Modal1.args = {};
