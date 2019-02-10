import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO
} from './types';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime(),
            text
        }
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};