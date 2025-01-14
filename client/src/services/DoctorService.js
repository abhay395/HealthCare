import axios from "axios";
const API_URL = 'http://localhost:8080/api/doctor';

export const getDoctorsAPI = ()=>axios.get(API_URL);
export const addDoctorAPI = (doctor)=>axios.post(API_URL, doctor);
export const deleteDoctorAPI = (id)=>axios.delete(`${API_URL}/${id}`);
export const updateDoctorAPI = (id, doctor)=>axios.put(`${API_URL}/${id}`, doctor);