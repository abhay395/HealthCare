import React, { useContext, useState } from 'react'
import { Input, Button, AppointmentContext } from "../index"
function RescheduleModel({ data, closeModal }) {
    const [rescheduleData, setrescheduleData] = useState(data.time);
    const {updateAppointment} = useContext(AppointmentContext)
    const handleSubmit = ()=>{
        updateAppointment(data._id,{time:rescheduleData})
        closeModal()
    }
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <Input type='time' value={rescheduleData} onChange={(e) => setrescheduleData(e.target.value)} />
                <Button label={"Reschedule"} onClick={handleSubmit} />
                <Button label={"Cancel"} onClick={() => closeModal()} custome='bg-white border border-5 hover:bg-gray-200' additionalClasses='ml-2' />
            </div>
        </div>
    )
}

export default RescheduleModel