import React, {useState} from 'react';


function MyComponent() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    
    function addTask() {

         
        if(newTask.trim() !== ""){
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }else{
            alert("Pls enter some task");
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter(
            (_, i) => i!==index
        );

        setTasks(updatedTasks);
    }

    function moveUp(index){
        if(index !== 0){
            const temp = [...tasks];
            const x = temp[index];
            temp[index ] = temp[index - 1];
            temp[index - 1] = x;

            setTasks(temp);
        }
        
    }

    function moveDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;

            setTasks(updatedTasks);
        }
        
    }
    

    return(
        <div className="container">
        <h1 className="heading">To Do List</h1>
        <input type="text" placeholder="Enter the task" id="task-box" onChange={handleInputChange} value={newTask}/>
        <button className="add-task-btn" onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map(
                (task,index) => (
                <li key={index}>
                    <span>{task} </span>
                    <div className="button-group" >
                <button className="delete-task-btn" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="up-btn" onClick={()=>moveUp(index)}>⬆️</button>
                <button className="down-btn" onClick={()=>moveDown(index)}>⬇️</button>
                </div>
                </li>
                
                
            ))}
        </ul>
        </div>
    )
}

export default MyComponent;