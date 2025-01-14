import React from 'react'
import Button from './Button'

function CardForAppointment({appointment,openModal,deleteAppointment}) {
    const formatDate = (isoDate) => {
        // Create a new Date object from the ISO date string
        const date = new Date(isoDate);
        // Extract the date part in YYYY-MM-DD format
        return date.toISOString().split('T')[0];
      };
    const formatTime = (isoTime) => {
        const [hours, minutes] = isoTime.split(':');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${amOrPm}`;
    };
    return (
        <div className='border rounded-lg p-4 flex justify-between items-center mb-3'>
            <div>
                <p>
                    <strong>Patient:</strong> {appointment?.patient}
                </p>
                <p>
                    <strong>Doctor:</strong> {appointment?.doctor}
                </p>
                <p>
                    <strong>Date:</strong>{formatDate( appointment?.date)}
                </p>
                <p>
                    <strong>Time:</strong> {formatTime(appointment?.time)}
                </p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <Button label={"Reshedule"} onClick={() => openModal(appointment)} />
                <Button label={"Cancel"} variant='danger' onClick={()=>deleteAppointment(appointment._id)} />
            </div>
        </div>
    )
}

export default CardForAppointment