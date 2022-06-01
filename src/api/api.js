import axios from 'axios';
const BASE_URL = 'http://localhost:8080/';

///------User api------///
const createUser = (user) => {
    return axios.post(BASE_URL+'users', user);
}

const getId = () => {
    return getLoggedUser().user.id;
}

const login = (payload) => {
    return axios.post(BASE_URL+'login', payload);
}

const getUsers = () => {
    return axios.get(BASE_URL+'users');
}

const saveUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
}

const getLoggedUser = () => {
    return JSON.parse(sessionStorage.getItem('user'));
}

const getToken = () => {
    return getLoggedUser().accessToken;
}

///------Product api------///

const getProducts = () => {
    return axios.get(BASE_URL+'products');
}

const createProduct = (product) => {
    return axios.post(BASE_URL+'products', product);
}

const saveProduct = (product) => {
    sessionStorage.setItem('user', JSON.stringify(product));
}

export {
    login,
    getUsers,
    saveUser,
    createUser,
    getLoggedUser,
    getToken,
    getProducts,
    createProduct,
    saveProduct,
    getId
}