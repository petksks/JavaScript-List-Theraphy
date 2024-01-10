import { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"
import ListItem from "../ListItem";
import AddItem from "../AddItem";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const defaultTasks = [
        {
            id: uuid(),
            description: "Feed the fish"
        },
        {
            id: uuid(),
            description: "Play the guitar"
        }
    ]

    const removeItem = itemId => {
        setTasks(tasks.filter(item => item.id !== itemId))
    }

    const addItem = newTask => {
        setTasks([...tasks, newTask])
    }

    useEffect(() => {
        setTasks(...tasks, defaultTasks)

    }, [])

    return (
        <div data-testid="tasklist__container" className="task-list">Your reasons
            <AddItem addItem={addItem} />
            {tasks && tasks.map(item => <ListItem  key={item.id} task={item} removeItem={removeItem} />)}
        </div>
    )
}

export default TaskList