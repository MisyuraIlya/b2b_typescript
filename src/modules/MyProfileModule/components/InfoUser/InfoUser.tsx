import React from 'react';
import './InfoUser.styles.scss';
import { Button2 } from '../../constructor';
const mockData = {id:1, name:'מאפית עילית -מזרחי בע"מ', contact: 'בעלים', mail:'C759200@gmail.com', phone:'0526028788', town:'טבריה', obligo:'56665-'}
const InfoUser = () => {
    return (
        <div className='InfoUser'>
            
            <div className='head'>
                <div className='flex-container'>
                    <div className='col-lg-2'>
                        <p>שם</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>איש קשר</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>מייל</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>טלפון</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>עיר</p>
                    </div>
                    <div className='col-lg-1'>
                        <p>אובליגו</p>
                    </div>
                </div>
            </div>
            <div className='flex-container'>
                <div className='col-lg-2'>
                    <p>{mockData.name}</p>
                </div>
                <div className='col-lg-1'>
                    <p>{mockData.contact}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{mockData.mail}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{mockData.phone}</p>
                </div>
                <div className='col-lg-2'>
                    <p>{mockData.town}</p>
                </div>
                <div className='col-lg-1'>
                    <p>{mockData.obligo}</p>
                </div>
                <div className='col-lg-2 '>
                    <Button2 Primary={false}>יציאה</Button2>
                </div>
            </div>
        </div>
    );
};

export default InfoUser;