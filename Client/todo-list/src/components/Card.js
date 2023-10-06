import React, { useState } from 'react';

function Card({ card, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ name: card.name, description: card.description });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedData({ name: card.name, description: card.description });
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

    return (
        <li>
            {isEditing ? (
                <>
                    <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
                    <input type="text" name="description" value={editedData.description} onChange={handleInputChange} />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </>
            ) : (
                <>
                    {card.name} - {card.status ? 'Completed' : 'Incomplete'}
                    <p>{card.description}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </>
            )}
        </li>
    );
};

export default Card;
