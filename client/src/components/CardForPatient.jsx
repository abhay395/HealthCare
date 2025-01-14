import React from 'react'
import Button from './Button'

function CardForPatient({ patient, openModal, handelDelete, openModalForUpdate }) {



  return (
    <div
      className="bg-white shadow-lg sm:max-w-[80%] mb-2 rounded-lg p-4 cursor-pointer"
      onClick={() => openModal(patient)}
    >
      <div className="text-lg font-semibold mb-3">
        <p className="text-blue-800">{patient.name}</p>
        <p>
          Age: <span className="text-blue-600">{patient.age}</span>
        </p>
        <p>
          Gender: <span className="text-blue-600">{patient.gender}</span>
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <Button label={"Edit"} onClick={(e) => {
          e.stopPropagation();
          // console.log("hello")
          openModalForUpdate(patient) 
          
          }} />
        <Button label={"Delete"} variant="danger" onClick={(e) => {
          e.stopPropagation();
          handelDelete(patient._id)
          // console.log(patient._id)
        }} />
      </div>
    </div>
  )
}

export default CardForPatient