import axios from "axios";
const API_URL = 'http://localhost:8080/api/appointment';

export const getAppointmentsAPI = ()=>axios.get(API_URL);
export const addAppointmentAPI = (appointment)=>axios.post(API_URL, appointment);
export const deleteAppointmentAPI = (id)=>axios.delete(`${API_URL}/${id}`);
export const updateAppointmentAPI = (id, appointment)=>axios.put(`${API_URL}/${id}`, appointment);