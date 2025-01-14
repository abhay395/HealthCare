import React from 'react'
import Button from './Button'

function CardForDoctor({ doctor, openModal, handelDelete, openModalForUpdate }) {
  //  console.log(doctor)
  return (
    <div
      className="bg-white shadow-lg sm:max-w-[80%] mb-2 rounded-lg p-4 cursor-pointer"
      onClick={() => openModal(doctor)}
    >
      <div className="text-lg font-semibold mb-3">
        <p className="text-blue-800">{doctor?.name}</p>
        <p>
          Specialization: <span className="text-blue-600">{doctor?.specialization}</span>
        </p>
        <p>
          Email: <span className="text-blue-600">{doctor?.email}</span>
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <Button label={"Edit"} onClick={(e) => {
          e.stopPropagation();
          // console.log("hello")
          openModalForUpdate(doctor)
        }} />
        <Button label={"Delete"} variant="danger" onClick={(e) => {
          e.stopPropagation();
          handelDelete(doctor?._id)
        }} />
      </div>
    </div>
  )
}

export default CardForDoctor