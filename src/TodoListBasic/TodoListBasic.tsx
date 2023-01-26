import React from 'react';

const TodoListBasic = () => {

    
    
    const task = 'Add task:'
    const todo = 'To do'
    const progress = 'In progress'
    const done = 'Done'
    

        return (<body>
            <center>To do basic list</center>
            <div>
                <h2>{task}</h2>
                <input placeholder="Enter a task" type="text" name=""></input>
                <button>+</button>
            </div>
            <br></br>
            <div>
                <h2>{todo}</h2>
            </div>
            <br></br>
            <div>
                <h2>{progress}</h2>
            </div>
            <br></br>
            <div>
                <h2>{done}</h2>
            </div>
        </body>
        
        );
    
    
};




export default TodoListBasic;
