import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Screen from './components/Screen';
import reducer from './reducers/index';


let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

let ui =
<Provider store={store}>
    <Screen />
</Provider>

ReactDOM.render(ui, document.getElementById('root'));

