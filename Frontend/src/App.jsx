import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Login'; 
import Registro from './Components/Registro';
import Inicio from './Components/Inicio';
import Create from './Components/Create';
import Clima from "./Components/Clima";
import NotFound from "./Components/NotFound";
import ChatIA from "./Components/ChatIA";
import PreciosAgricolas from './Components/PreciosAgricolas';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './Components/PrivateRoute';

function App() {
    return (
        <Router>
            <>
                {/* Contenedor de notificaciones */}
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000} 
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <Routes>
                    <Route path="/" element={<Navigate to="/userlogin" />} />
                    <Route path="/userlogin" element={<Login />} />
                    <Route path="/Registro" element={<Registro />} />
                    
                    
                    {/* RUTAS PARA EL ADMINISTRADOR */}
                    <Route path="/Create" element={
                        <ProtectedRoute allowedRoles={['ADMIN']}>
                            <Create />
                        </ProtectedRoute>
                    } />

                    {/* RUTAS PARA LOS USUARIOS */}   
                    <Route path="/Inicio" element={
                        <ProtectedRoute allowedRoles={['USER']}>
                            <Inicio />
                        </ProtectedRoute>
                    } />
                    <Route path="/clima" element={
                        <ProtectedRoute allowedRoles={['USER']}>
                            <Clima />
                        </ProtectedRoute>
                    } />

                    <Route path="/ChatIA" element={
                         <ProtectedRoute allowedRoles={['USER']}>
                            <ChatIA />
                        </ProtectedRoute>
                    } />
                    <Route path="/PreciosAgricolas" element={
                        <ProtectedRoute allowedRoles={['USER']}>
                            <PreciosAgricolas />
                        </ProtectedRoute>
                    } />

                    {/* RUTA PARA EL ADMIN */}
                    {/* RUTA NO ENCONTRADA */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
