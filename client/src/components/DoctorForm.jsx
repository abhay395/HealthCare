import React from 'react'
import {Input,Button} from '../index'

function DoctorForm({doctorData, handleChange, handleSubmit,update=false }) {
    return (
        <div className="sm:max-w-[80%] mr-5 ">
            <h1 className="text-2xl text-center mb-5 mt-6 font-bold text-blue-600">
                Add New Doctor
            </h1>
            <Input label={"Doctor Name"} name='name' onChange={handleChange} value={doctorData.name} placeholder={"Enter Doctor Name"} />
            <Input label={"Specialization"} name='specialization' onChange={handleChange} value={doctorData.specialization} placeholder={"Enter Specialization"} />
            <Input label={"Years of Experience"} name='yearsOfExperience' onChange={handleChange} value={doctorData.yearsOfExperience} type="number" placeholder={"Enter Years of Experience"} />
            <Input label={"Email"} name='email' onChange={handleChange} value={doctorData.email} placeholder={"Enter Doctor Email"} />
            <Input label={"Phone"} name='phone' onChange={handleChange} value={doctorData.phone} placeholder={"Enter Doctor Phone"} />
            <Input label={"Clinic Address"} name='clinicAddress' onChange={handleChange} value={doctorData.clinicAddress} placeholder={"Enter Clinic Address"} />
            <Button label={update ? "Update Doctor" : "Add Doctor"} onClick={handleSubmit} />
        </div>
    )
}

export default DoctorForm