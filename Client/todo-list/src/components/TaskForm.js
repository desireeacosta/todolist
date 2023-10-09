import React from 'react';
import successStyle from './styles/SuccessStyle';
import styles from './styles/TaskFormStyle';
import warningStyle from './styles/WarningStyle';

const TodoForm = ({ formData, setFormData, handleCreateClick, closeNewTask }) => {
    return (
        <form>
            <label style={ styles.text }>
                Name:
                <input
                    style={ styles.input }
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </label>
            <div>
                <button style={successStyle} type="button" onClick={handleCreateClick}>Create</button>
                <button style={warningStyle} type="button" onClick={closeNewTask}>Cancel</button>
            </div>
        </form>
    );
};

export default TodoForm;
