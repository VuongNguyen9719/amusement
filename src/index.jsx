import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/index.jsx'
import './index.css'
import './assets/style/form-control.css';

import { Provider } from 'react-redux';
import store from './redux-store';

import Dialogs from '~reduxStore/Components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        <Dialogs />
        <ToastContainer />
    </Provider>
)