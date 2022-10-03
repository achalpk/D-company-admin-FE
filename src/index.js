import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './index.css';
import App from './App';

axios.interceptors.request.use(
    (req) => {
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });
        return res
    },
    (err) => {
        toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT
        }); 
        return Promise.reject(err);
    }
);

ReactDOM.render(<App/>, document.getElementById('root'));

