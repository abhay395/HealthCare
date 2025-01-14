import axios from "axios";
const API_URL = 'http://localhost:8080/api/patient';

export const getPatientsAPI = ()=>axios.get(API_URL);
export const addPatientAPI = (patient)=>axios.post(API_URL, patient);
export const deletePatientAPI = (id)=>axios.delete(`${API_URL}/${id}`);
export const updatePatientAPI = (id, patient)=>axios.put(`${API_URL}/${id}`, patient);