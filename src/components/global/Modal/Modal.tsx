import React, { FC, ReactNode } from 'react';
import { MdClear } from "react-icons/md";
import './Modal.styles.scss'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className='Modal'>
                <div className='Modal_content'>
                    <div className='close_content'>
                        <MdClear onClick={onClose} size={30}/>
                    </div>
                    <div className='content'>
                        {children}
                    </div>
                </div>    
            </div>
            
            <div className='bg_modal' onClick={onClose}></div>
        </>

    );
};

export default Modal;