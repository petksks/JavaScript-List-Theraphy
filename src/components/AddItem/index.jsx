import { v4 as uuid } from "uuid"
import { useState } from "react";

const AddItem = ({addItem}) => {
    const[inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: uuid(), 
            description: inputValue
        }

        addItem(newTask);
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form name="add-item" onSubmit={handleSubmit}>
            <label htmlFor="task-description">Add a new task</label>
            <input id="task-description" required onChange={handleChange} value={inputValue}></input>
            <button>Add item</button>
        </form>
    )
}

export default AddItem