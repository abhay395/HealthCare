import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import { Model, CardForPatient, PatientContext, PatientForm, useModal, useForm } from '../index'
import { MoonLoader } from 'react-spinners';


const DEFAULT_PATIENT_DATA = {
  name: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  address: "",
};
function Patients() {
  const { patients, fetchPatient, addPatient, deletePatient, loading } = useContext(PatientContext);

  const detailModel = useModal();
  const updateModel = useModal();

  const { formData: patientData, handleChange, handleSubmit } = useForm(DEFAULT_PATIENT_DATA)

  const handelDelete = (id) => {
    deletePatient(id)
  }
  useEffect(() => {
    if (!patients) {
      fetchPatient();
    }
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-x-4 ml-5">
      {/* Form Section */}
      <PatientForm patientData={patientData} handleChange={handleChange} handleSubmit={() => handleSubmit(addPatient)} />
      {/* Patients List */}
      <div>
        <h1 className="text-2xl text-center mb-5 mt-6 font-bold text-blue-600">
          Patients
        </h1>
        <div className='h-[600px] overflow-y-scroll'>
          {
            loading ? (<div className='flex justify-center items-center h-[600px]'><MoonLoader color="#36d7b7" /></div>) : (
              patients && patients.length > 0 ? patients.map((patient, index) => (
                <CardForPatient key={index} handelDelete={handelDelete} patient={patient} openModal={detailModel.openModal} openModalForUpdate={updateModel.openModal} />
              )) : (<p>No Patient</p>)
            )
          }
        </div>
      </div>
      {/* Modal */}
      <Model closeModal={detailModel.closeModal} isModalOpen={detailModel.isOpen} data={detailModel.data} patient={true} />
      <Model closeModal={updateModel.closeModal} isModalOpen={updateModel.isOpen} data={updateModel.data} patient={true} formActiveFor="patient" />
    </div>
  );
}

export default Patients;
