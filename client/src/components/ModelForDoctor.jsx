import React from 'react'

function ModelForDoctor({data,closeModal}) {
    return (
        <div className="modal-overlay">
    <div className="modal-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Doctor Details
        </h2>
        <div className="text-lg mb-4">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Specialization:</strong> {data.specialization}</p>
            <p><strong>Years of Experience:</strong> {data.yearsOfExperience}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Clinic Address:</strong> {data.clinicAddress}</p>
        </div>
        <button
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={closeModal}
        >
            Close
        </button>
    </div>
</div>
    )
}

export default ModelForDoctor