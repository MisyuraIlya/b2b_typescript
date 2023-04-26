import React, {useState} from 'react';
import './DatePicker.styles.scss';
import 'react-calendar/dist/Calendar.css';
import { MyCalendar } from '../../constructor';
const DatePicker = () => {
    const [fromDate, setFronDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    return (
        <div className='DatePicker'>
            <div className='calendar_btn gap-4'>
                <MyCalendar date={fromDate} onChangeDate={setFronDate}/>
                <MyCalendar date={toDate} onChangeDate={setToDate}/>
            </div>
            <div className='static_dates py-4'>
                <div className='date_rande cursor-pointer '>
                    <p>חודש</p>
                </div>
                <div className='date_rande cursor-pointer'>
                    <p>רבעון</p>
                </div>
                <div className='date_rande cursor-pointer'>
                    <p>חצי שנה</p>
                </div>
                <div className='date_rande cursor-pointer'>
                    <p>שנה</p>
                </div>
            </div>

        </div>
    );
};

export default DatePicker;