import React from 'react';

const TodoForm = ({ formData, setFormData, handleCreateClick, closeNewTask }) => {
    const styles = {
        button: {
            padding: "10px 25px",
            margin: "10px 5px",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#ffffff",
        },
        text: {
            margin: "10px",
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
