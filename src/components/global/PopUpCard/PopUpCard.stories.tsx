import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PopUpCard from './PopUpCard';
import './PopUpCard.styles.scss';

export default {
    title: 'Global Components/PopUpCard',
    component: PopUpCard
} as ComponentMeta<typeof PopUpCard>;

const Template: ComponentStory<typeof PopUpCard> = (args) => <PopUpCard {...args} />;



const data = {
    "id": 2,
    "sku": "23",
    "name": "samsung 10",
    "description": "samsung 10",
    "packQuant": 1,
    "barcode": "1231",
    "unpublished": true,
    "createdAt": {
        "date": "2023-04-10 22:59:29.000000",
        "timezone_type": 3,
        "timezone": "Etc/UTC"
    },
    "updatedAt": {
        "date": "2023-04-10 22:59:29.000000",
        "timezone_type": 3,
        "timezone": "Etc/UTC"
    },
    "category": {
        "id": 4,
        "name": "samsung",
        "image": "https://havaya-b2b.co.il/src/img/categories/692549.jpg",
        "level": 3,
        "createdAt": {
            "date": "2023-04-09 20:32:37.000000",
            "timezone_type": 3,
            "timezone": "Etc/UTC"
        },
        "updatedAt": {
            "date": "2023-04-09 20:32:37.000000",
            "timezone_type": 3,
            "timezone": "Etc/UTC"
        }
    },
    "price": {
        "id": 2,
        "price": 900,
        "discount": 0,
        "createdAt": {
            "date": "2023-03-25 20:05:26.000000",
            "timezone_type": 3,
            "timezone": "Etc/UTC"
        },
        "updatedAt": {
            "date": "2023-03-25 20:05:26.000000",
            "timezone_type": 3,
            "timezone": "Etc/UTC"
        }
    }
};

export const PopUpCard1 = Template.bind({});
PopUpCard1.args = {
    //TODO
    // data: data
};
