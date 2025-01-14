import React from 'react'
import { ModelForDoctor, ModelForPatient, UpdateFormForPatient, UpdateFormForDoctor, Input, Button, RescheduleModel } from '../index'

function Model({ isModalOpen, data, closeModal, doctor = false, patient = false, formActiveFor = "" }) {
    return (
        <div>
            {isModalOpen && data && patient && formActiveFor == "" && (<ModelForPatient closeModal={closeModal} data={data} />)}
            {isModalOpen && data && doctor && formActiveFor == "" && (<ModelForDoctor closeModal={closeModal} data={data} />)}
            {isModalOpen && data && formActiveFor === "patient" && (
                <UpdateFormForPatient closeModal={closeModal} data={data} />
            )}
            {isModalOpen && data && formActiveFor === "doctor" && (
                <UpdateFormForDoctor closeModal={closeModal} data={data} />
            )}
            {
                isModalOpen && data && formActiveFor==="appointment" && (<RescheduleModel closeModal={closeModal} data={data}  />)
            }
        </div>
    )
}
export default Model