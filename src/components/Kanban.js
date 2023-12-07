import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css'
const Kanban = () => {
    const [tasks, setTasks] = useState({
        todo: ['Task 1', 'Task 2'],
        inProgress: ['Task 3'],
        done: ['Task 4'],
    });
    const getBackground = (status) =>{
        const keys = Object.keys(tasks)
        console.log(keys)
        var index  = keys.indexOf(status)
        console.log(index)
        if (index !== -1 && index !== 0){
            var num = index % 5
            console.log(num)
            console.log("col-"+num)
            return "col-"+num
        }
        else{
            return "col-0"
        }
    }
    const handleRemoveList = (status) =>{
        var updatedTasks = {...tasks}
        console.log(updatedTasks)
        delete updatedTasks[status]
        console.log(updatedTasks)
        setTasks(updatedTasks)
    }
    const handleAddList = () => {
        const newList = prompt('Enter a new List:');
        console.log(newList)
        if (newList) {
            let updatedLists = {...tasks};
            updatedLists[newList] = []
            setTasks(updatedLists)
        }
    }

    const handleAddTask = (status) => {
        const newTask = prompt('Enter a new task:');
        if (newTask) {
            var updatedTasks = { ...tasks };
            updatedTasks[status] = [...updatedTasks[status], newTask];
            console.log(updatedTasks)
            setTasks(updatedTasks)
        }
    };
    const handleRemoveTask = (status, index) =>{
        const updatedTasks = {...tasks}
        if (updatedTasks[status] && updatedTasks[status].length > index) {
            updatedTasks[status].splice(index, 1);
            setTasks(updatedTasks);
        }
    }


    const handleDragStart = (event, status, index) => {

        event.dataTransfer.setData('text/plain', JSON.stringify({ status, index }));
    };

    const handleDrop = (event, toStatus) => {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        const { status, index } = data;
        if (status !== toStatus ) {
            const taskToMove = tasks[status][index];
            const updatedTasks = { ...tasks };
            updatedTasks[status].splice(index, 1);
            updatedTasks[toStatus] = [...updatedTasks[toStatus], taskToMove];
            setTasks(updatedTasks)
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="kanban-board d-flex flex-row justify-content-start align-items-start ">
            {Object.keys(tasks).map((status) => (
                <div
                    key={status}
                    className={getBackground(status) + " kanban-column d-flex flex-column flex-wrap col-md-2 m-4"}

                    onDrop={(event) => handleDrop(event, status)}
                    onDragOver={handleDragOver}
                >

                    <div className="d-flex justify-content-between list-heading">
                        <h2>{status}</h2>
                        <button onClick={() => handleRemoveList(status)} className="kan-remove">
                            -
                        </button>


                    </div>

                        {tasks[status].map((task, index) => (
                            <div
                                className="kanban-item d-flex flex-row justify-content-between flex-wrap item-container"
                                key={index}
                                draggable
                                onDragStart={(event) => handleDragStart(event, status, index)}
                            >
                                <div className="col-md-10 flex-wrap">
                                    {task}
                                </div>
                                <div className="col-md-2 d-flex flex-column justify-content-center">
                                    <button onClick={() => handleRemoveTask(status, index)} className="kan-remove">
                                        -
                                    </button>
                                </div>


                            </div>
                        ))}
                    <div className="d-flex flex-row add-card align-items-center ">

                        <button onClick={() => handleAddTask(status)} className="kan-button">
                            &#43;&nbsp; Add a card

                        </button>

                    </div>
                </div>

            ))}
            <div className="add-list col-md-2 m-4 d-flex justify-content-center">
                <button onClick={() => handleAddList()} className="kan-button">
                    + Add List
                </button>
            </div>

            {/*<button onClick={() => handleAddTask()}>*/}
            {/*    Add Task*/}
            {/*</button>*/}
        </div>
    );
};

export default Kanban