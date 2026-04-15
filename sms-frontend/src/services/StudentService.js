import axios from 'axios';
import AuthService from './AuthService';

const API_URL = "http://localhost:8080/api/students";

const getAuthHeader = () => {
    const user = AuthService.getCurrentUser();
    if (user && user.token) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
};

const getAllStudents = () => {
    return axios.get(API_URL, { headers: getAuthHeader() });
};

const createStudent = (student) => {
    return axios.post(API_URL, student, { headers: getAuthHeader() });
};

const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`, { headers: getAuthHeader() });
};

const getStudentById = (id) => {
    return axios.get(`${API_URL}/${id}`, { headers: getAuthHeader() });
};

export default {
    getAllStudents,
    createStudent,
    deleteStudent,
    getStudentById
};