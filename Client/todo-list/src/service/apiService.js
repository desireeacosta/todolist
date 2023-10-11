import axios from 'axios';

const apiService = () => {
    const baseURL = "https://webappdevd14.azurewebsites.net/";

    return {
        getAll: async () => {
            try {
                const response = await axios.get(baseURL);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        create: async (data) => {
            try {
                const response = await axios.post(baseURL, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        delete: async (id) => {
            try {
                const response = await axios.delete(`${baseURL}/${id}`);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        edit: async (id, data) => {
            try {
                const response = await axios.put(`${baseURL}/${id}`, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    };
};

export default apiService;
