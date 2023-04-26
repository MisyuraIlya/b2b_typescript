import React from 'react';
import './DocumentTypes.styles.scss';
const DocumentTypes = () => {
    return (
        <div className='DocumentTypes py-4'>
            <div className='type'>
                <p className='cursor-pointer'>הזמנות</p>
            </div>
            <div className='type'>
                <p className='cursor-pointer'>ה.מחיר</p>
            </div>
            <div className='type'>
                <p className='cursor-pointer'>ח.מס</p>
            </div>
            <div className='type'>
                <p className='cursor-pointer'>גויל חובות</p>
            </div>
            <div className='type'>
                <p className='cursor-pointer'>כרטסת</p>
            </div>
            <div className='type'>
                <p className='cursor-pointer'>טיוטות</p>
            </div>
        </div>
    );
};

export default DocumentTypes;