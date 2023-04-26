import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyProfileModule from './MyProfileModule';
import './MyProfileModule.styles.scss';

export default {
    title: 'Components/MyProfileModule',
    component: MyProfileModule
} as ComponentMeta<typeof MyProfileModule>;

const Template: ComponentStory<typeof MyProfileModule> = (args) => <MyProfileModule/>;

export const MyProfileModule1 = Template.bind({});
MyProfileModule1.args = {};
