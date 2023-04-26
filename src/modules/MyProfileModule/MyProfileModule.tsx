import React from 'react';
import { Container } from './constructor';
import './MyProfileModule.styles.scss'
import InfoUser from './components/InfoUser/InfoUser';
import OptionsUser from './components/OptionsUser/OptionsUser';
import {Card} from './constructor';
import {Heading} from './constructor';

const MyProfileModule = () => {
    return (
        <Container>
            <Heading>פרופיל אישי</Heading>
            <div className='py-6'>
                <InfoUser/>
            </div>
            <div className='py-6'>
                <OptionsUser/>
            </div>
        </Container>
    );
};

export default MyProfileModule;