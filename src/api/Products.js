import axios from 'axios';
import { getToken } from './api';
const BASE_URL = 'http://localhost:8080/';

// Funcion para llamar los productos desde la api
const callProducts = () => {
    return axios({method: "GET", url:BASE_URL+'products', headers: {
        authorization: "Bearer " + getToken()
    }} );
}

 // Funcion para crear un producto
const createProduct = (product) => {
    return axios.post(BASE_URL+'products', product, {
        headers: {
            authorization: 'Bearer ' + getToken()
        }
    });
}

// Funcion para borrar el producto
const deleteProduct = (id) => {
    return axios.delete(BASE_URL+'products/'+id, {
        headers: {
            authorization: 'Bearer ' + getToken()
        }
    });
}

// Funcion para crear una orden
const createOrder = (order) => {
    return axios.post(BASE_URL+'orders', order, {
        headers: {
            authorization: 'Bearer ' + getToken()
        }
    });
}

// Funcion para ver la orden
const getOrder = () => {
    return axios.get(BASE_URL+'orders', {
        headers: {
            authorization: 'Bearer ' + getToken()
        }
    });
}

// Actualizar orden
const updateOrder = (id, update) => {
    return axios.patch(BASE_URL+'orders/'+id, update, {
           headers: {
               "content-type": "application/json",
               authorization: 'Bearer ' + getToken()
           }
       });
}


export {callProducts, createProduct, deleteProduct, createOrder, getOrder, updateOrder} ;