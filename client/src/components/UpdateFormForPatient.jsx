import React, { useContext, useState } from 'react'
import { PatientContext, PatientForm } from '../index'
import { IoMdClose } from "react-icons/io";

function UpdateFormForPatient({ data, closeModal }) {
  const [updateData, setUpdateData] = useState(data);
  const { updatePatient } = useContext(PatientContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name)
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = () => {
    // console.log(patientData)
    const isEmpty = Object.values(updateData).some(x => x === '');
    if (isEmpty) {
      alert('Please fill in all fields.');
      return;
    }
    updatePatient(data._id, updateData);
    closeModal()
  }
  return (
    <div className='modal-overlay'>
      <div className='modal-content '>
        {/* <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"> */}
        <IoMdClose style={{ fontSize: '2rem', color: 'red' }} className='cursor-pointer' onClick={closeModal} />
        {/* </button> */}
        <PatientForm patientData={updateData} handleChange={handleChange} handleSubmit={handleSubmit} update={true} />
      </div>
    </div>
  )
}

export default UpdateFormForPatient