import axios from 'axios';

const apiService = () => {
    const baseUrl = `http://localhost:5131/api/Card`;

    return {
        getAll: async () => {
            try {
                const response = await axios.get(baseUrl);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        create: async (data) => {
            try {
                const response = await axios.post(baseUrl, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        delete: async (id) => {
            try {
                const response = await axios.delete(`${baseUrl}/${id}`);
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        edit: async (id, data) => {
            try {
                const response = await axios.put(`${baseUrl}/${id}`, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    };
};

export default apiService;
