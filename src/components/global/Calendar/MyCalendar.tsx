import React, {FC, useState} from 'react';
import { MdCalendarMonth } from "react-icons/md";
import moment from 'moment-timezone'
import Calendar from 'react-calendar';
import './MyCalendar.styles.scss';

interface MyCalendar {
    date : Date;
    onChangeDate: (newDate: Date) => void;
}

const MyMyCalendar: FC<MyCalendar> = ({date,onChangeDate}) => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(date);

    const changeDateFunc = (date: any) => {
        setValue(date)
        onChangeDate(date)
        setActive(false)
    }
    return (
        <>
        <div className='MyCalendar'>
            <div className='MyCalendar_card' onClick={() => setActive(!active)}>
                <span>{moment(value).format('DD/MM/YYYY')}</span>
                <MdCalendarMonth size={24}/>

            </div>
        </div>
        {active &&  <div className='CalendarModal' onClick={() => setActive(false)}></div>}
        <div className={`ReactCalendar ${active ? 'active' : ''}`}>
            <Calendar onChange={(e) => changeDateFunc(e)} value={value} />
        </div>
        </>

    );
};

export default MyMyCalendar;