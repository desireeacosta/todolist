import React, { useState, useEffect } from 'react';
import Card from './Card';
import apiService from '../service/apiService';
import { fetchData, handleCreate, handleDelete, handleEdit } from '../utils/helperFunctions';
import Modal from './Modal';
import TaskForm from './TaskForm';

const service = apiService();

function TodoList() {
    const [cards, setCards] = useState([]);
    const [formData, setFormData] = useState({ name: '' });
    const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

    const openNewTask = () => {
        setIsNewTaskOpen(true);
    };

    const closeNewTask = () => {
        setIsNewTaskOpen(false);
    };

    const handleCreateClick = () => {
        handleCreate(service, formData, () => {
            fetchData(service, setCards);
            closeNewTask();
        });
    };

    useEffect(() => {
        fetchData(service, setCards);
    }, []);

    const styles = {
        ul: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
        },
        centerContent: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            margin: 5,
        },
        title: {
            fontSize: "30px",
            margin: "10px",
        },
    };

    return (
        <>
            <h1 style={styles.centerContent}>Todo List</h1>
            <div style={styles.centerContent}>
                <ul style={styles.ul}>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            onEdit={(id, data) => handleEdit(service, id, data, () => fetchData(service, setCards))}
                            onDelete={(id) => handleDelete(service, id, () => fetchData(service, setCards))}
                        />
                    ))}
                </ul>
            </div>
            <div style={styles.centerContent}>
                <button style={ styles.button } onClick={openNewTask}> Add new task </button>
                <button style={ styles.button }> Delete done </button>
            </div>
            <Modal isOpen={isNewTaskOpen} onClose={closeNewTask}>
                <h2 style={ styles.title }>New Task</h2>
                <TaskForm
                    formData={formData}
                    setFormData={setFormData}
                    handleCreateClick={handleCreateClick}
                    closeNewTask={closeNewTask}
                />
            </Modal>
        </>
    );
}

export default TodoList;
