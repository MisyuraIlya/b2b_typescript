import React from 'react';
import { Container } from './constructor';
import './MyProfileModule.styles.scss'
import InfoUser from './components/InfoUser/InfoUser';
import OptionsUser from './components/OptionsUser/OptionsUser';
const MyProfileModule = () => {
    return (
        <div className='MyProfile'>
            <Container>
                <h4>אזור אישי</h4>
                <div style={{marginTop:'30px'}}>
                    <InfoUser/>
                </div>
                <div style={{marginTop:'50px'}}>
                    <OptionsUser/>
                </div>
            </Container>
        </div>
    );
};

export default MyProfileModule;