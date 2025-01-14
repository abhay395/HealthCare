import React, { useState } from 'react';
import DoctorContext from './DoctorContext';
import {getDoctorsAPI,deleteDoctorAPI,addDoctorAPI, updateDoctorAPI} from '../../index'
const DoctorContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(null);
    const [loading,setLoading] = useState(false)

    const fetchDoctors = async () => {
        try {
            setLoading(true)
            const data = await getDoctorsAPI()
            setDoctors(data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const addDoctor = async (doctor) => {
        try {
            setLoading(true)
            const data = await addDoctorAPI(doctor)
            setDoctors([...doctors,data.data])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const deleteDoctor = async (id) => {
        try {
            setLoading(true)
            await deleteDoctorAPI(id)
            setDoctors(doctors.filter(doctor => doctor._id !== id))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const updateDoctor = async(id,doctor)=>{
        try {
            setLoading(true)
            const data = await updateDoctorAPI(id,doctor)
            setDoctors(doctors.map(doctor => doctor._id === id ? data.data : doctor))
            setLoading(false)
            // console.log(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    return (
        <DoctorContext.Provider value={{ doctors, setDoctors, fetchDoctors,deleteDoctor,addDoctor,updateDoctor,loading }}>
            {children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;