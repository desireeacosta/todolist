import React, { useState } from 'react';
import successStyle from './styles/SuccessStyle';
import styles from './styles/TaskFormStyle';
import warningStyle from './styles/WarningStyle';

const TodoForm = ({ formData, setFormData, handleCreateClick, closeNewTask }) => {
    const [error, setError] = useState('');

    const validateInput = () => {
        if (formData.name.trim() === '') {
            setError('Name cannot be empty!');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateInput()) {
            handleCreateClick();
            setFormData({ ...formData, name: '' });
        }
    };

    const handleClose = () => {
        setError('');
        setFormData({ ...formData, name: '' });
        closeNewTask();
    };

    return (
        <form>
            <label style={styles.text}>
                Name:
                <input
                    style={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </label>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <button style={successStyle} type="button" onClick={handleSubmit}>
                    Create
                </button>
                <button style={warningStyle} type="button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
