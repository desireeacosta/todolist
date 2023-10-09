import React, { useState } from 'react';
import DeleteIcon from './icons/DeleteIcon';
import EditIcon from './icons/EditIcon';
import Modal from './Modal';
import styles from './styles/CardStyle';
import successStyle from './styles/SuccessStyle';
import warningStyle from './styles/WarningStyle';

function Card({ card, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ name: card.name });
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const openDelete = () => {
        setIsDeleteOpen(true);
    };

    const closeDelete = () => {
        setIsDeleteOpen(false);
    };

    const openEdit = () => {
        setIsEditing(true);
    };

    const closeEdit = () => {
        setIsEditing(false);
        setEditedData({ name: card.name });
    };

    const saveEdit = () => {
        onEdit(card.id, editedData);
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        onDelete(card.id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleCheckboxChange = () => {
        onEdit(card.id, { ...editedData, status: !card.status });
    };

    return (
        <div style={styles.div}>
            <div style={styles.listItem}>
                <div style={styles.text}>
                    {card.name}
                </div>
                <div style={styles.rightContent}>
                    <button style={styles.ghostButton} onClick={openDelete}>
                        <DeleteIcon />
                    </button>
                    <button style={styles.ghostButton} onClick={openEdit}>
                        <EditIcon />
                    </button>
                    <input style={styles.checkBox} type="checkbox" checked={card.status} onChange={handleCheckboxChange} />
                </div>
            </div>
            <Modal isOpen={isDeleteOpen} onClose={closeDelete}>
                <h2 style={styles.title}>Delete Task</h2>
                <p style={styles.text}>Are you sure you want to delete this card?</p>
                <button style={successStyle} onClick={handleDeleteClick}>Yes</button>
                <button style={warningStyle} onClick={closeDelete}>No</button>
            </Modal>
            <Modal isOpen={isEditing} onClose={closeEdit}>
                <h2 style={styles.title}>Edit Task</h2>
                <div style={styles.centerContent}>
                    <input style={styles.input} type="text" name="name" value={editedData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <button style={successStyle} onClick={saveEdit}>Save</button>
                    <button style={warningStyle} onClick={closeEdit}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

export default Card;
