import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-xiao-default-rtdb.firebaseio.com/"
});

export default instance;