import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OptionsUser from './OptionsUser';
// import './index.styles.scss';

export default {
    title: 'Components/MyProfileModule/OptionsUser',
    component: OptionsUser
} as ComponentMeta<typeof OptionsUser>;

const Template: ComponentStory<typeof OptionsUser> = (args) => <OptionsUser/>;

export const OptionsUser1 = Template.bind({});
OptionsUser1.args = {};
