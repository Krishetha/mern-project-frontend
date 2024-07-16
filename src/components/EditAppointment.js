

import Axios from "axios";
import AppointmentForm from "./AppointmentForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditAppointment() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", description: "", appointmentsAvailable: "", appointmentDate: "" });
    const [loading, setLoading] = useState(true);
    const[newData,setNewData]= useState([]);
    useEffect(() => {
        Axios.get("https://mern-project-backend-qu07.onrender.com/appointmentRoute/update-appointment/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, description, appointmentsAvailable, appointmentDate } = res.data;
                    setInitialValue({ name, description, appointmentsAvailable, appointmentDate: new Date(appointmentDate).toISOString().split('T')[0] });
                    setLoading(false);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, [id]);
    const getState = (childData) => {
        setNewData(childData);
    }
    if (loading) {
        return <div>Loading...</div>;
    }
const handleSubmit=() =>{
    const data={name:newData[0],description:newData[1],appointmentsAvailable:newData[2],appointmentDate:newData[3]};
    Axios.put("https://mern-project-backend-qu07.onrender.com/appointmentRoute/update-appointment/"+id,data)
    .then((res)=>{
        if(res.status === 200)
        alert("Record updated successfully")
        else
        Promise.reject();
    })
    .catch((err)=>alert(err));
}
    return (
        <form onSubmit={handleSubmit} >
            <AppointmentForm getState={getState}
                nameValue={initialValue.name}
                descriptionValue={initialValue.description}
                appointmentsAvailableValue={initialValue.appointmentsAvailable}
                appointmentDateValue={initialValue.appointmentDate}
            />
        </form>
    );
}

export default EditAppointment;