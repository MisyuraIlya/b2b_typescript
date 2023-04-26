import React from 'react';
import './InfoUser.styles.scss';
import { Button2 } from '../../constructor';
import { useAuth } from '../../constructor';
import {Card} from '../../constructor';
const mockData = {id:1, name:'מאפית עילית -מזרחי בע"מ', contact: 'בעלים', mail:'C759200@gmail.com', phone:'0526028788', town:'טבריה', obligo:'56665-'}
const InfoUser = () => {
    const {user} = useAuth()
    console.log('user11',user)
    return (
        <Card>
            <div className='grid grid-cols-4 gap-2 px-12 py-4 bg-white rounded-lg'>
                <div>
                    שם
                </div>
                <div>
                    מייל
                </div>
                <div>
                    טלפון
                </div>
                <div>
                    אובליגו
                </div>
                <div>
                    {user?.name}
                </div>
                <div>
                    {user?.email}
                </div>
                <div>
                    {user?.phone}
                </div>
                <div>
                    {user?.obligo}
                </div>
            </div>
        </Card>
    );
};

export default InfoUser;