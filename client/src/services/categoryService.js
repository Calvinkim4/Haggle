import axios from 'axios';

const URL = "http://localhost:3001/";

const api = axios.create({
    baseURL: `${URL}`
  })

export const getAllFromCategory = async (category) => {
    try {
        const response = await api.get(`/category/${category.toLowerCase()}`);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}