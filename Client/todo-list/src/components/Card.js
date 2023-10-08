import React, { useState } from 'react';
import DeleteIcon from './icons/DeleteIcon';
import EditIcon from './icons/EditIcon';
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

    const styles = {
        div: {
            alignContent: "center",
            margin: 16,
        },
        centerContent: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        ghostButton: {
            border: "none",
            backgroundColor: "none",
            borderRadius: "50%",
        },
        button: {
            padding: "10px 25px",
            margin: "10px 5px",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#ffffff",
        },
        input: {
            border: "2px solid #9ECEC5",
            fontSize: "16px",
            borderRadius: "5px",
            padding: "8px",
            outline: "none",
            width: "300px",
            margin: "10px",
        },
        title: {
            fontSize: "30px",
            margin: "10px",
        },
        p: {
            margin: "10px",
        }
    };

    const successStyle = {
        ...styles.button,
        backgroundColor: "#9ECEA9",
    };

    const warningStyle = {
        ...styles.button,
        backgroundColor: "#CE9EAF",
    };

    return (
        <div style={styles.div}>
            <li>
                {card.name}
                <button style={styles.ghostButton} onClick={openEdit}>
                    <EditIcon />
                </button>
                <button style={styles.ghostButton} onClick={openDelete}>
                    <DeleteIcon />
                </button>
                <input type="checkbox" checked={card.status} onChange={handleCheckboxChange} />
            </li>
            <Modal isOpen={isDeleteOpen} onClose={closeDelete}>
                <h2 style={ styles.title }>Delete Task</h2>
                <p style={ styles.p }>Are you sure you want to delete this card?</p>
                <button style={successStyle} onClick={handleDeleteClick}>Yes</button>
                <button style={warningStyle} onClick={closeDelete}>No</button>
            </Modal>
            <Modal isOpen={isEditing} onClose={closeEdit}>
                <h2 style={ styles.title }>Edit Task</h2>
                <div style={styles.centerContent}>
                    <input style={ styles.input } type="text" name="name" value={editedData.name} onChange={handleInputChange} />
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
