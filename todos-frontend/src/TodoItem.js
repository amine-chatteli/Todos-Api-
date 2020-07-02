import React from 'react';


const TodoItem = ({name,completed,onToggle}) => {

    return (
        <li >
            <span  style={{textDecoration:completed?'line-through':'none'}}
            onClick={onToggle}>{name}</span>
        
            {name}
        </li>)
}
export default TodoItem;