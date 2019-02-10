import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import TodoApp from './components/TodoApp';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const todoApp = createStore(
    reducers,
    composeEnhancers()
);

ReactDOM.render(
    <Provider store={todoApp}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
);