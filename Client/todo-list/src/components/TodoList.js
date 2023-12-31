import React, { useState, useEffect } from 'react';
import Card from './Card';
import apiService from '../service/apiService';
import { fetchData, handleCreate, handleDelete, handleEdit } from '../utils/helperFunctions';
import Modal from './Modal';
import TaskForm from './TaskForm';
import styles from './styles/TodoListStyle';
import successStyle from './styles/SuccessStyle';
import EmptyTable from './EmptyTable';

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

    return (
        <>
            <h1 style={{ ...styles.centerContent, ...styles.title }}>Todo List</h1>
            <div style={styles.centerContent}>
                <button style={successStyle} onClick={openNewTask}> Add new task </button>
            </div>
            <div style={styles.centerContent}>
                {cards.length === 0 ? (
                    <EmptyTable />
                ) : (
                    <ul style={styles.ul}>
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                className="a-name"
                                onEdit={(id, data) => handleEdit(service, id, data, () => fetchData(service, setCards))}
                                onDelete={(id) => handleDelete(service, id, () => fetchData(service, setCards))}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <Modal isOpen={isNewTaskOpen} onClose={closeNewTask}>
                <h2 style={styles.subtitle}>New Task</h2>
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
