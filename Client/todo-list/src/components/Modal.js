import React from 'react';
import styles from './styles/ModalStyle';

const Modal = ({ isOpen, onClose, children }) => {
    const overlayStyle = {
        ...styles.overlay,
        display: isOpen ? 'flex' : 'none',
    };

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
