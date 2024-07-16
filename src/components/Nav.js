import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext';

export default function Nav() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar navbar-dark bg-warning">
           
            <Link to="/create-appointment" className="navbar-brand fw-bold fs-3 mx-5 text-secondary">
                <span style={{ fontFamily: "Bodoni Moda SC", fontSize: "xx-large", color: "black"}}>Hospital Management </span>
            </Link>
            <div className="nav px-3 mx-3">
                {isAuthenticated ? (
                    <>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/create-appointment" className="btn btn-outline-dark mx-2">Create Doctor</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/appointment-list" className="btn btn-outline-dark mx-2">Appointment List</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/user-list" className="btn btn-outline-dark mx-2">User List</Link>
                        <button style={{ fontFamily: "Bodoni Moda SC" }} onClick={logout} className="btn btn-outline-dark mx-2">Logout</button>
                    </>
                ) : (
                    <>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/signin" className="btn btn-outline-dark mx-2">Sign In</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/create-user" className="btn btn-outline-dark mx-2">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}