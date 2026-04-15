import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const user = AuthService.getCurrentUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    // Check if user has the required role (e.g., ROLE_ADMIN)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;