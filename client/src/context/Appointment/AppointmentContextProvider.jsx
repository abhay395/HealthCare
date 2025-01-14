import React, { useState } from 'react';
import AppointmentContext from './AppointmentContext';
import { getAppointmentsAPI,deleteAppointmentAPI,addAppointmentAPI, updateAppointmentAPI} from '../../index'

const AppointmentContextProvider = ({ children }) => {
    const [appointments, setAppointments] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAppointments = async () => {
        try {
            setLoading(true)
            const data = await getAppointmentsAPI()
            setAppointments(data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const deleteAppointment = async (id) => {
        try {
            setLoading(true)
            await deleteAppointmentAPI(id)
            setAppointments(appointments.filter(appointment => appointment._id !== id))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const addAppointment = async (appointment) => {
        try {
            setLoading(true)
            const data = await addAppointmentAPI(appointment)
            // console.log(data.data)
            setAppointments([...appointments, data.data])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const updateAppointment = async (id, updatedAppointment) => {
        try {
            setLoading(true)
            const data = await updateAppointmentAPI(id, updatedAppointment);
            setAppointments(appointments.map(appointment => 
                appointment._id === id ? { ...data.data } : appointment
            ));
            setLoading(false)
        } catch (error) {
            console.error('Failed to update appointment:', error);
        }
    }
    return (
        <AppointmentContext.Provider value={{ appointments, setAppointments, fetchAppointments,deleteAppointment,addAppointment,updateAppointment ,loading }}>
            {children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentContextProvider;
