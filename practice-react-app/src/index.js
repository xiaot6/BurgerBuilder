import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//do not need type this in other axios requests
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// for request
axios.interceptors.request.use(request => {
    console.log(request);
    //Editing your request
    return request;
}, error => {
        console.log(error);
        return Promise.reject(error);
});

//for response
axios.interceptors.response.use(request => {
    console.log(request);
    //Editing your request
    return request;
}, error => {
        console.log(error);
        return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
