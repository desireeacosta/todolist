import React, { useState, useEffect } from 'react';
import Card from './Card';
import apiService from '../service/apiService';
import { fetchData, handleCreate, handleDelete, handleEdit } from '../utils/helperFunctions';

const service = apiService();

function TodoList() {
    const [cards, setCards] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '' });

    useEffect(() => {
        fetchData(service, setCards);
    }, []);

    const handleCreateClick = () => {
        handleCreate(service, formData, () => fetchData(service, setCards));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        onEdit={(id, data) => handleEdit(service, id, data, () => fetchData(service, setCards))}
                        onDelete={(id) => handleDelete(service, id, () => fetchData(service, setCards))}
                    />
                ))}
            </ul>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </label>
                <br />
                <button type="button" onClick={handleCreateClick}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default TodoList;
