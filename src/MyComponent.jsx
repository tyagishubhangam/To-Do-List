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
        <>
        <h1 className="heading">To Do List</h1>
        <input type="text" placeholder="Enter the task" id="task-box" onChange={handleInputChange} value={newTask}/>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map(
                (task,index) => 
                <li key={index}>{task} 
                <button onClick={()=>deleteTask(index)}>Delete</button>
                <button onClick={()=>moveUp(index)}>⬆️</button>
                <button onClick={()=>moveDown(index)}>⬇️</button>
                </li>
                
                
            )}
        </ul>
        </>
    )
}

export default MyComponent;