import React from 'react';

const TodoList = (props) => {
    return ( 
        <div> 
            <span 
                className="todo-list" 
                style={{
                    textDecoration: props.todo.complete ? "line-through" : ""
                }}
                onClick={props.changeComplete}
            >
                {props.todo.text}
            </span>
            <span className="todo-button-delete">
                <button onClick={props.onDelete}>X</button>
            </span>
        </div> 
     );
}
 
export default TodoList;