import React from 'react';

const Todo = ({ children, completed, onClick }) => {
    return (
        <div
            className="item"
            onClick={onClick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            {children}
        </div>
    );
};

export default Todo;