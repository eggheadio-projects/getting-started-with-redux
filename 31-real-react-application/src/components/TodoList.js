import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div className="ui bulleted list">
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    className="item"
                    completed={todo.completed}
                    onClick={() => onTodoClick(todo.id)}
                >
                    {todo.text}
                </Todo>
            )}
        </div>
    );
};

export default TodoList;