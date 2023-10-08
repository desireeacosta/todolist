import React, { useState } from 'react';
import Modal from './Modal';

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

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedData({ name: card.name });
    };

    const handleSaveEdit = () => {
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

    const styles = {
        div: {
            alignContent: "center",
            margin: 16,
        },
        button: {
            border: "none",
            backgroundColor: "none",
            borderRadius: "50%",
        },
    };

    return (
        <div style={styles.div}>
            <li>
                {isEditing ? (
                    <>
                        <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                ) : (
                    <>
                        {card.name}
                        <button style={styles.button} onClick={handleEditClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>
                        </button>
                        <button style={styles.button} onClick={openDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
                        <input type="checkbox" checked={card.status} onChange={handleCheckboxChange} />
                    </>
                )}
            </li>
            <Modal isOpen={isDeleteOpen} onClose={closeDelete}>
                <h2>Delete Task</h2>
                <p>Are you sure you want to delete this card?</p>
                <button onClick={handleDeleteClick}>Yes</button>
                <button onClick={closeDelete}>No</button>
            </Modal>
        </div>
    );
}

export default Card;
