import React from "react";
import PateintContext from "./PateintContext";
import { getPatientsAPI, deletePatientAPI, addPatientAPI, updatePatientAPI } from '../../index.js'
const PatientContextProvider = ({ children }) => {
    const [patients, setPatients] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const fetchPatient = async () => {
        try {
            setLoading(true)
            const data = await getPatientsAPI()
            setPatients(data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const deletePatient = async (id) => {
        try {
            setLoading(true)
            await deletePatientAPI(id)
            setPatients(patients.filter(patient => patient._id !== id))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const addPatient = async (patient) => {
        try {
            setLoading(true)
            const data = await addPatientAPI(patient)
            // console.log(data.data)
            setPatients([...patients, data.data])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const updatePatient = async (id, patient) => {
        try {
            setLoading(true)
            const data = await updatePatientAPI(id, patient);
            setPatients(patients.map(p => p._id === id ? data.data : p));
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    return (
        <PateintContext.Provider value={{ patients, setPatients, fetchPatient, deletePatient, addPatient, updatePatient ,loading }}>
            {children}
        </PateintContext.Provider>
    )
}

export default PatientContextProvider