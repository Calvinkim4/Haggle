import axios from 'axios';

const URL = "http://localhost:3001/";

const api = axios.create({
    baseURL: `${URL}`
  })


export const createItem = async (id, data) => {
    try {
        const response = await api.post(`/user/${id}/items`, data);
        return response.data.entry;
    } catch (e) {
        console.log(e.message)
    }
}


export const getAllItems = async (id) => {
    try {
        const response = await api.get(`/user/${id}/items`);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}

export const getItem = async (id, itemId) => {
    try {
        const response = await api.get(`/user/${id}/items/${itemId}`);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}

export const updateItem = async (id, itemId, data) => {
    try {
        const response = await api.put(`/user/${id}/items/${itemId}`, data);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
  }
  

export const deleteItem = async (id, itemId) => {
    try {
        const response = await api.delete(`/user/${id}/items/${itemId}`);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}
