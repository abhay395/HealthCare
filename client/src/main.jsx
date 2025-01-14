import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppointmentContextProvider, DoctorContextProvider, PatientContextProvider } from './index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppointmentContextProvider>
        <DoctorContextProvider>
          <PatientContextProvider>
            <App />
          </PatientContextProvider>
        </DoctorContextProvider>
      </AppointmentContextProvider>
    </BrowserRouter>
  </StrictMode>
)
