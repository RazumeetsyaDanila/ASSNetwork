import './index.css';
import store from './bll/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let renderAll = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode> <App state={state} dispatch={store.dispatch.bind(store)} /> </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderAll(store.getState());

store.subscribe(renderAll);




reportWebVitals();