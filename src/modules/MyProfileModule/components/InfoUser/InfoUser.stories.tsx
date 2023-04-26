import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfoUser from './InfoUser';
// import './index.styles.scss';

export default {
    title: 'Components/MyProfileModule/InfoUser',
    component: InfoUser
} as ComponentMeta<typeof InfoUser>;

const Template: ComponentStory<typeof InfoUser> = (args) => <InfoUser/>;

export const InfoUser1 = Template.bind({});
InfoUser1.args = {};
