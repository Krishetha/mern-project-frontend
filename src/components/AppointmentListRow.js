
import Axios from "axios";
import {Link,useNavigate} from "react-router-dom";


export default function AppointmentListRow(props) {
    const navigate = useNavigate();
    const { _id, name, description, appointmentsAvailable, appointmentDate } = props.obj;

    const getToken = () => localStorage.getItem('token');

    const handleClick = () => {
        const token = getToken();
        Axios.delete("https://mern-project-backend-qu07.onrender.com/appointmentRoute/delete-appointment/" + _id, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("Record is deleted");
                    navigate("/appointment-list");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                if (err.response.status === 401 || err.response.status === 403) {
                    navigate('/signin'); 
                } else {
                    alert(err.message);
                }
            });
    };

    const handlePurchase = () => {
        if (appointmentsAvailable > 0) {
            const updatedAppointments = appointmentsAvailable - 1;
            const token = getToken();
            Axios.put("https://mern-project-backend-qu07.onrender.com/appointmentRoute/update-appointment/" + _id, { appointmentsAvailable: updatedAppointments }, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Appointment Booked SUCCESSFULLY!!");
                        navigate("/create-appointment");
                        window.location.reload();
                    } else {
                        Promise.reject();
                    }
                })
                .catch((err) => {
                    if (err.response.status === 401 || err.response.status === 403) {
                        navigate('/signin'); 
                    } else {
                        alert(err.message);
                    }
                });
        } else {
            alert("NO MORE APPOINTMENTS AVAILABLE!!");
        }
    };

    return (
        <tr style={{fontFamily: "Bodoni Moda SC"}} className="border-bottom border-secondary fs-4 text-capitalize">
            
            <td className="py-3">{name}</td>
            <td className="py-3">{description}</td>
            <td className="py-3">{new Date(appointmentDate).toLocaleDateString()}</td>
            <td className="py-3">{appointmentsAvailable}</td>
            <td className="py-3 text-center">
                <button onClick={handlePurchase} className="btn btn-success mx-2 fs-4">
                    Book Appointment
                </button>
                <button class="btn btn-success">
                <Link class="text-decoration-none text-light" to= {"/edit-appointment/"+_id}>
                    Edit
                </Link>
                </button>
                <button onClick={handleClick} className="btn btn-danger mx-1 fs-4">
                    Delete
                </button>
            </td>
        </tr>
    );
}