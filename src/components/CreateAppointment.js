import { useState } from "react";
import Axios from "axios";
import AppointmentForm from "./AppointmentForm";

export default function CreateAppointment() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    };

    const handleSubmit = (appointment) => {
        appointment.preventDefault();
        const data = { name: arr[0], description: arr[1], appointmentsAvailable: arr[2], appointmentDate: arr[3] };
        Axios.post("https://mern-project-backend-qu07.onrender.com/appointmentRoute/create-appointment", data)
        .then((res) => {
            if (res.status === 200)
                alert("Appointment Booked SUCCESSFULLY!!");
            else
                Promise.reject();
        })
        .catch((err) => {
            alert(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <AppointmentForm getState={getState} />
        </form>
    );
}