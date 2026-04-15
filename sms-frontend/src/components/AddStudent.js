import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        rollNumber: '',
        department: '',
        phoneNumber: '',
        academicYear: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const saveStudent = (e) => {
        e.preventDefault();
        
        // We ensure the object structure matches the Java Student entity exactly
        StudentService.createStudent(student)
            .then(() => {
                alert("Student added successfully!");
                navigate('/');
            })
            .catch((error) => {
                console.error("Full Error:", error.response);
                alert("Failed to add student. Ensure you are logged in as Admin.");
            });
    };

    return (
        <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center" }}>Add New Student</h2>
            <form onSubmit={saveStudent}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Full Name:</label>
                    <input type="text" name="name" value={student.name} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Email ID:</label>
                    <input type="email" name="email" value={student.email} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Roll Number:</label>
                    <input type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Department:</label>
                    <input type="text" name="department" value={student.department} onChange={handleChange} required style={{ width: "100%", padding: "8px" }} />
                </div>
                
                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", flex: 1 }}>
                        Save Student
                    </button>
                    <button type="button" onClick={() => navigate('/')} style={{ backgroundColor: "#555", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", flex: 1 }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;