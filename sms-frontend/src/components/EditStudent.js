import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { authHeader, logout } from './services/auth'; // ✅ Added

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [student, setStudent] = useState({
    name: '',
    rollNumber: '',
    email: '',
    phoneNumber: '',
    department: '',
    academicYear: '',
    address: ''
  });

  // ✅ GET student with auth header
  useEffect(() => {
    axios.get(`http://localhost:8080/api/students/${id}`, {
      headers: authHeader()
    })
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 401) {
          alert("Session expired. Please login again.");
          logout();
          navigate('/login');
        }
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // ✅ PUT update with auth header
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `http://localhost:8080/api/students/${id}`,
      student,
      { headers: authHeader() }
    )
      .then(() => {
        alert("Student Updated Successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 401) {
          alert("Session expired. Please login again.");
          logout();
          navigate('/login');
        }
      });
  };

  return (
    <div>
      <h2>Edit Student Details</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}
      >
        <label>Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} required />
        
        <label>Roll Number:</label>
        <input type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} required />
        
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} />
        
        <label>Department:</label>
        <input type="text" name="department" value={student.department} onChange={handleChange} />
        
        <label>Academic Year:</label>
        <input type="text" name="academicYear" value={student.academicYear} onChange={handleChange} />
        
        <label>Address:</label>
        <input type="text" name="address" value={student.address} onChange={handleChange} />
        
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer', border: 'none' }}
        >
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;