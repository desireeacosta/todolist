import React from 'react';

const TodoForm = ({ formData, setFormData, handleCreateClick, closeNewTask }) => {
    return (
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
            <br />
            <button type="button" onClick={handleCreateClick}>
                Create
            </button>
            <button type="button" onClick={closeNewTask}>
                Cancel
            </button>
        </form>
    );
};

export default TodoForm;
