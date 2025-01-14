import React from 'react'

function ModelForPatient({data,closeModal}) {
  return (
    <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">
                    Patient Details
                </h2>
                <div className="text-lg mb-4">
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Age:</strong> {data.age}</p>
                    <p><strong>Gender:</strong> {data.gender}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Address:</strong> {data.address}</p>
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

export default ModelForPatient