import React from 'react'
import {Input,Button} from '../index'
function PatientForm({ patientData, handleChange, handleSubmit,update=false }) {
    return (
        <div className="sm:max-w-[80%] mr-5 ">
            <h1 className="text-2xl text-center mb-5 mt-6 font-bold text-blue-600">
                Add New Patient
            </h1>
            {/* <form onSubmit={handleSubmit}> */}
            <Input label={"Patient Name"} name='name' value={patientData.name} onChange={handleChange} placeholder={"Enter Patient Name"} />
            <Input label={"Age"} value={patientData.age} onChange={handleChange} type="number" name='age' placeholder={"Enter Age of Patient"} />
            <Input label={"Gender"} value={patientData.gender} onChange={handleChange} name='gender' placeholder={"Enter Patient Gender"} />
            <Input label={"Email"} value={patientData.email} onChange={handleChange} name='email' placeholder={"Enter Patient Email"} />
            <Input label={"Phone"} value={patientData.phone} onChange={handleChange} name='phone' placeholder={"Enter Patient Phone"} />
            <Input label={"Address"} value={patientData.address} onChange={handleChange} name='address' placeholder={"Enter Patient Address"} />
            <Button label={update ? "Update Patient" : "Add Patient"} variant={update?'secondary':"primary"} onClick={() => handleSubmit()} />
            {/* </form> */}
        </div>
    )
}

export default PatientForm