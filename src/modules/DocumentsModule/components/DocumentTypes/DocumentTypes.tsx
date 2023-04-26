import React from 'react';
import './DocumentTypes.styles.scss';
const DocumentTypes = () => {
    return (
        <div className='DocumentTypes'>
            <div className='type'>
                <p>הזמנות</p>
            </div>
            <div className='type'>
                <p>ה.מחיר</p>
            </div>
            <div className='type'>
                <p>ח.מס</p>
            </div>
            <div className='type'>
                <p>גויל חובות</p>
            </div>
            <div className='type'>
                <p>כרטסת</p>
            </div>
            <div className='type'>
                <p>טיוטות</p>
            </div>
        </div>
    );
};

export default DocumentTypes;