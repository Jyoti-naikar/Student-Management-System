import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import StudentService from '../services/StudentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    const user = AuthService.getCurrentUser();
    const isAdmin = user && user.role === 'ROLE_ADMIN';

    // Fetch students on component load
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = () => {
        StudentService.getAllStudents()
            .then(res => setStudents(res.data))
            .catch(err => console.error("Error fetching students", err));
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            StudentService.deleteStudent(id).then(() => {
                loadStudents(); // Refresh the list
            });
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Student Management System</h2>
            <p>Logged in as: <strong>{user?.username}</strong> ({user?.role})</p>
            
            {isAdmin && (
                <button onClick={() => navigate('/add-student')} style={{ marginBottom: "10px", padding: "8px 15px", cursor: "pointer" }}>
                    + Add New Student
                </button>
            )}
            
            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => navigate(`/view-student/${student.id}`)}>View</button>
                                {isAdmin && (
                                    <button 
                                        onClick={() => handleDelete(student.id)} 
                                        style={{ marginLeft: "10px", color: "red" }}
                                    >
                                        Delete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={() => { AuthService.logout(); navigate('/login'); }}>Logout</button>
        </div>
    );
};

export default StudentList;