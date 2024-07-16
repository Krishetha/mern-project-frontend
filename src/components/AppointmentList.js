
import { useEffect, useState } from "react";
import AppointmentListRow from "./AppointmentListRow";
import Axios from "axios";

export default function AppointmentList() {
    const [arr, setArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        Axios.get("https://mern-project-backend-qu07.onrender.com/appointmentRoute/")
        .then((res) => {
            if (res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err) => alert(err))
    }, []);

    const handleSearch = (appointment) => {
        setSearchQuery(appointment.target.value);
    };

    const filteredAppointments = arr.filter(appointment =>
        appointment.name && appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ListItems = () => {
        return filteredAppointments.map((val, index) => {
            return <AppointmentListRow key={index} obj={val} />
        });
    };

    return (
        <div style={{ maxWidth: "80%", margin: "50px auto", fontFamily: "Bodoni Moda SC" }}>
            <input
                type="text"
                placeholder="Search by doctor name"
                value={searchQuery}
                onChange={handleSearch}
                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
            />
            <table className="table table-bordered table-light table-striped">
                <thead className="thead-dark fs-3">
                    <tr>
                        
                        <th className="text-center bg-dark-subtle">Name</th>
                        <th className="text-center bg-dark text-light">Description</th>
                        <th className="text-center bg-dark-subtle">Appointment Date</th>
                        <th className="text-center bg-dark text-light">Appointments Available</th>
                        <th className="text-center bg-dark-subtle">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {ListItems()}
                </tbody>
            </table>
        </div>
    );
}