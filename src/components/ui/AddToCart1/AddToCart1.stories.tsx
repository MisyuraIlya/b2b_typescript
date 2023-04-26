import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddToCart1 from './AddToCart1';

export default {
    title: 'UI/AddToCart1',
    component: AddToCart1
} as ComponentMeta<typeof AddToCart1>;

const Template: ComponentStory<typeof AddToCart1> = (args) => <AddToCart1 {...args}/>;

const onAddToCart = (id: number) => {

} 

const onIncrease = () => {

}

const onDecrease = () => {

}

const onEdit = () => {

}
export const AddToCart1_1 = Template.bind({});
// TODO
AddToCart1_1.args = {
  // itemId:1,
  // isInCart:true,
  // quantity:10,
  // onAddToCart: onAddToCart,
  // onIncrease: onIncrease,
  // onDecrease: onDecrease,
  // onEdit: onEdit
};

// export const AddToCart1_2 = Template.bind({});
// AddToCart1_2.args = {
//   itemId:2,
//   isInCart:false,
//   quantity:0,
//   onAddToCart: onAddToCart,
//   onIncrease: onIncrease,
//   onDecrease: onDecrease,
//   onEdit: onEdit
// };
