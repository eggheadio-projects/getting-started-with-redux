import React from 'react';

import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = () => {
    return (
        <div className="ui container">
            <AddTodo />           
            <Footer />
            <VisibleTodoList />
        </div>
    );
};

export default TodoApp;