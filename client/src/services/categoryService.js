import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

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