import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            background: '#fff',
            padding: 15,
            borderRadius: '8px',
            position: 'relative',
            width: '400px',
        },
    };

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
