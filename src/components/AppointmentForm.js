import { useState } from 'react';

export default function AppointmentForm(props) {
    const [name, setName] = useState(props.nameValue);
    const [description, setDescription] = useState(props.descriptionValue);
    const [appointmentsAvailable, setAppointmentsAvailable] = useState(props.appointmentsAvailableValue);
    const [appointmentDate, setAppointmentDate] = useState(props.appointmentDateValue);

    const arr = [name, description, appointmentsAvailable, appointmentDate];

    const handleClick = () => {
        props.getState(arr);
    };

    return (
        <div className="container mt-4 fs-4" style={{ maxWidth: "40%" }}>
            <div className="mb-3">
                
                <label htmlFor="doctorName" className="form-label fw-bold">Doctor Name</label>
                <input
                    defaultValue={props.nameValue}
                    type="text"
                    id="doctorName"
                    className="form-control"
                    value={name}
                    onChange={(appointment) => setName(appointment.target.value)}
                    placeholder="Enter Doctor Name"
                />
            </div>
            <div className="mb-3">
                
                <label htmlFor="doctorDescription" className="form-label fw-bold">Doctor Description</label>
                <textarea
                    defaultValue={props.descriptionValue}
                    id="doctorDescription"
                    className="form-control"
                    value={description}
                    onChange={(appointment) => setDescription(appointment.target.value)}
                    placeholder="Enter Description of Doctor"
                />
            </div>
            <div className="mb-3">
                
                <label htmlFor="appointmentsAvailable" className="form-label fw-bold">Appointments Available</label>
                <input
                    defaultValue={props.appointmentsAvailableValue}
                    type="number"
                    id="appointmentsAvailable"
                    className="form-control"
                    value={appointmentsAvailable}
                    onChange={(appointment) => setAppointmentsAvailable(appointment.target.value)}
                    placeholder="Enter Number of Appointments Available"
                />
            </div>
            <div className="mb-3">
               
                <label htmlFor="appointmentDate" className="form-label fw-bold">Appointment Date</label>
                <input
                    defaultValue={props.appointmentDateValue}
                    type="date"
                    id="appointmentDate"
                    className="form-control"
                    value={appointmentDate}
                    onChange={(appointment) => setAppointmentDate(appointment.target.value)}
                />
            </div>
            <button onClick={handleClick} type="submit" className="btn btn-success d-block mx-auto my-3 fs-4">
                Submit
            </button>
        </div>
    );
}