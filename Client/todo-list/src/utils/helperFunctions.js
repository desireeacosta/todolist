export async function fetchData(service, setData) {
    try {
        const response = await service.getAll();
        setData(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const handleCreate = async (service, data, fetchData) => {
    try {
        await service.create(data);
        fetchData();
    } catch (error) {
        console.error('Error creating data:', error);
    }
};

export const handleDelete = async (service, id, fetchData) => {
    try {
        await service.delete(id);
        fetchData();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};

export const handleEdit = async (service, id, data, setEditData, fetchData) => {
    try {
        await service.edit(id, data);
        setEditData({ id: null, name: '', description: '' });
        fetchData();
    } catch (error) {
        console.error('Error editing data:', error);
    }
};
