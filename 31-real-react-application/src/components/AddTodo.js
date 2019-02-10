import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const AddTodo = props => {
    let input;

    const onButtonClick = (text) => {
        props.addTodo(text)
        input.value = '';
    };

    return (
        <div className="ui action input">
            <input ref={node => { input = node; }} />
            <button className="ui button" onClick={() => onButtonClick(input.value)}>Add Todo</button>
        </div >
    );
};

export default connect(
    null,
    { addTodo }
)(AddTodo);