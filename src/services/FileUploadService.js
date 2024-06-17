import axios from 'axios';

// const API_URL = 'https://localhost:7254/api/Files';
const API_URL = import.meta.env.VITE_API_BASIC_URL_DEPLOYED + '/api/Files';

const getAllFiles = () => axios.get(API_URL);

const createFile = (file) => {
  const formData = new FormData();
  formData.append('fileName', file.fileName);
  formData.append('uploadedFile', file.fileData);
  return axios.post(`${API_URL}/upload`, formData);
};

export default {
    getAllFiles,
    createFile,
};
