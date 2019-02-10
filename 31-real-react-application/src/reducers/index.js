import { combineReducers } from 'redux';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../actions/types';

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id === action.payload) {
                return {
                    ...state,
                    completed: !state.completed
                };
            }
            return state;
        default:
            return state;
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(todo => todoReducer(todo, action));
        default:
            return state;
    }
};

const setVisibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    todos: todosReducer,
    visibilityFilter: setVisibilityFilterReducer
});