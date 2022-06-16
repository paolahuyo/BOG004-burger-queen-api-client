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

const getUser = () => {
    return axios({method: "GET", url:BASE_URL+'users', headers: {
        authorization: "Bearer " + getToken()
    }} );
}

const updateUser = (id, update) =>{
<<<<<<< HEAD
    return axios.patch(BASE_URL+"users/"+id, update,{
        headers:{
            "content-type": "application/json",
            authorization: "Bearer " + getToken()
=======
    return axios.patch(BASE_URL+"user/"+id, update,{
        headers:{
            "content-type": "application/json",
            authorization: "Bearer" + getToken()
>>>>>>> d595d37752fed3610bdb2c7192acc0b129913cd1
        }
    })
}

<<<<<<< HEAD
const deleteUsers = (id) =>{
    console.log("el id",id)
    console.log("token", getToken())
    return axios.delete(BASE_URL+"users/"+id, {
        withCredentials: true,
        headers:{
            "content-type": "application/json",
            authorization: "Bearer " + getToken()
=======
const deleteUser = (id) =>{
    return axios.delete(BASE_URL+"user/"+id,{
        headers:{
            "content-type": "application/json",
            authorization: "Bearer" + getToken()
>>>>>>> d595d37752fed3610bdb2c7192acc0b129913cd1
        }
    })
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
<<<<<<< HEAD
=======
    getUser,
>>>>>>> d595d37752fed3610bdb2c7192acc0b129913cd1
    saveUser,
    createUser,
    getLoggedUser,
    getToken,
    getProducts,
    createProduct,
    saveProduct,
    getId,
<<<<<<< HEAD
    getUser,
    updateUser,
    deleteUsers
=======
    updateUser,
    deleteUser
>>>>>>> d595d37752fed3610bdb2c7192acc0b129913cd1
}