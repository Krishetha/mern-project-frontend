
import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateAppointment from './components/CreateAppointment';
import AppointmentList from './components/AppointmentList';
import Nav from './components/Nav';
import EditAppointment from './components/EditAppointment';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import UserList from "./components/UserList";
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <div className="container-fluid">
                <HashRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Signin />} />
                        <Route path="/create-appointment" element={
                            <ProtectedRoute>
                                <CreateAppointment />
                            </ProtectedRoute>
                        } />
                        <Route path="/appointment-list" element={
                            <ProtectedRoute>
                                <AppointmentList />
                            </ProtectedRoute>
                        } />
                        <Route path="/edit-appointment/:id" element={
                            <ProtectedRoute>
                                <EditAppointment />
                            </ProtectedRoute>
                        } />
                        <Route path="/user-list" element={ 
                            <ProtectedRoute>
                                <UserList />
                            </ProtectedRoute>
                        } />
                        <Route path="/create-user" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </HashRouter>
            </div>
        </AuthProvider>
    );
}

export default App;