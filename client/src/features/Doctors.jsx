import React, { useContext, useEffect, useState } from 'react'
import { Model, CardForDoctor, DoctorContext, DoctorForm, useModal, useForm } from '../index'
import { MoonLoader } from 'react-spinners'
import '../App.css';

const DEFAULT_DOCTOR_DATA = {
  name: "",
  specialization: "",
  yearsOfExperience: "",
  email: "",
  phone: "",
  clinicAddress: "",
};
function Doctors() {
  const { doctors, fetchDoctors, addDoctor, deleteDoctor, loading } = useContext(DoctorContext)
  const { formData: doctorData, handleChange, handleSubmit } = useForm(DEFAULT_DOCTOR_DATA)
  const detailModel = useModal();
  const updateModel = useModal();
  const handleDelete = (id) => {
    deleteDoctor(id);
  }
  useEffect(() => {
    if (!doctors) {
      fetchDoctors();
    }
  }, [])
  useEffect(() => {
    if (loading) {
      console.log(loading)
    }
  }, [loading])
  return (
    <div className="grid sm:grid-cols-2 gap-x-4 ml-5 relative">
      {/* Doctor Form  Section */}
      <DoctorForm doctorData={doctorData} handleChange={handleChange} handleSubmit={() => { handleSubmit(addDoctor) }} />
      <div>
        <h1 className="text-2xl text-center mb-5 mt-6 font-bold text-blue-600">
          Doctors
        </h1>
        <div className='h-[600px] overflow-y-scroll'>

          {
            loading ? (<div className='flex justify-center items-center h-[600px]'><MoonLoader color="#36d7b7" /></div>) : (
              doctors && doctors.length > 0 ? doctors.map((doctor, index) => (
                <CardForDoctor key={index} handelDelete={handleDelete} doctor={doctor} openModal={detailModel.openModal} openModalForUpdate={updateModel.openModal} />
              )) : (<p>No Doctor</p>)
            )
          }
        </div>
      </div>

      {/* Modal */}
      <Model closeModal={detailModel.closeModal} isModalOpen={detailModel.isOpen} data={detailModel.data} doctor={true} />
      <Model closeModal={updateModel.closeModal} isModalOpen={updateModel.isOpen} data={updateModel.data} doctor={true} formActiveFor='doctor' />
    </div>
  );
}

export default Doctors