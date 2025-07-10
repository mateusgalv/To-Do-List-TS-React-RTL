
import { useState } from "react";
import "../styles/Todo.css";

function ToDoList() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNewTask(value);
    };

    const addTask = () => {
        const newTasks = [
            ...tasks,
            newTask,
        ];
        setTasks(newTasks);
    };

    return (
        <div className="todo-list-container">
            <table className="todo-list">
                <tr>
                    <th></th>
                    <th>
                        <input type="text" className="task-input" onChange={handleChange} placeholder="new task..."/>
                    </th>
                    <th onClick={addTask}>
                        Add
                    </th>
                </tr>
                {
                    tasks && tasks.map((task, index) => {
                        return (
                            <tr id={`task-${index}`} className="task-container">
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{task}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    );
}

export default ToDoList;