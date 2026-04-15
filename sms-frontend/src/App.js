import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_STUDENT']}>
            <StudentList />
          </ProtectedRoute>
        } />

        <Route path="/add-student" element={
          <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
            <AddStudent />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;