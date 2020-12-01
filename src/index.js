import './index.css';
import store from './bll/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";


let renderAll = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderAll(store.getState());

// при использовании паттерна "Наблюдатель", функция renderAll не получает state,
// поэтому необходимо передать state "вручную"
store.subscribe(() => {
    let state = store.getState();
    renderAll(state);
});


reportWebVitals();