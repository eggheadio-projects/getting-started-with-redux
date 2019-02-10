import React from 'react'
import { connect } from 'react-redux';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const VisibleTodoList = props => {
    const onTodoClick = (id) => {
        props.toggleTodo(id);
    };

    return (
        <TodoList todos={props.todos} onTodoClick={onTodoClick} />
    );
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

export default connect(
    mapStateToProps,
    { toggleTodo }
)(VisibleTodoList);
