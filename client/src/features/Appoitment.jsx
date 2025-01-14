import React, { useContext, useEffect, useState } from 'react'
import { Input, Button, CardForAppointment, AppointmentContext, Model, useModal, useForm } from '../index'
import { MoonLoader } from 'react-spinners'

const DEFAULT_APPOINTMENT_DATA = {
  patient: '',
  doctor: '',
  date: '',
  time: '',
}
function Appoitment() {
  const { appointments, addAppointment, deleteAppointment, fetchAppointments, loading } = useContext(AppointmentContext)
  const resheduleModal = useModal()
  const { formData: appointmentData, handleChange, handleSubmit } = useForm(DEFAULT_APPOINTMENT_DATA)

  useEffect(() => {
    if (!appointments) fetchAppointments();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-x-4 ml-5">
      <div className='sm:max-w-[80%] mr-5 '>
        <h1 className="text-2xl font-bold text-center my-4">Appointment Booking</h1>
        <form>
          <Input label="Patient Name" name='patient' onChange={handleChange} value={appointmentData.patient} placeholder="Enter Patient Name" />
          <Input label="Doctor Name" name='doctor' onChange={handleChange} value={appointmentData.doctor} placeholder="Enter Patient Name" />
          <Input label="Date" name='date' onChange={handleChange} value={appointmentData.date} type="date" />
          <Input label="Time" name='time' onChange={handleChange} value={appointmentData.time} type="time" />
          <Button label="Book Appointment" onClick={() => handleSubmit(addAppointment)} />
        </form>
      </div>
      <div className="mt-8 h-[600px] overflow-y-scroll">
        <h2 className="text-xl font-bold text-center mb-4">Upcoming Appointments</h2>
        <div className='mr-4 sm:w-[80%]'>
          {
            loading ? (<div className='flex justify-center items-center h-[600px]'><MoonLoader color="#36d7b7" /></div>) : (
              appointments && appointments.length != 0 ? appointments.map((appointment) => (
                <CardForAppointment
                  key={appointment._id}
                  appointment={appointment}
                  openModal={resheduleModal.openModal}
                  deleteAppointment={deleteAppointment}
                />
              )) : <p className='text-center'>No Appointments</p>)
          }

        </div>
      </div>
      <Model closeModal={resheduleModal.closeModal} formActiveFor='appointment' isModalOpen={resheduleModal.isOpen} data={resheduleModal.data} />
    </div>
  )
}

export default Appoitment