package com.example.sms.service;

import com.example.sms.entity.Student;
import com.example.sms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student saveStudent(Student student) {
        if (student.getRole() == null || student.getRole().isEmpty()) {
            student.setRole("ROLE_STUDENT");
        }
        return studentRepository.save(student);
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    // This is the method the error says is missing
public Student updateStudent(Long id, Student studentDetails) {
    Student student = getStudentById(id);

    student.setName(studentDetails.getName());
    student.setEmail(studentDetails.getEmail());
    student.setRollNumber(studentDetails.getRollNumber());
    student.setPhoneNumber(studentDetails.getPhoneNumber());
    student.setDepartment(studentDetails.getDepartment());
    student.setAcademicYear(studentDetails.getAcademicYear());
    student.setAddress(studentDetails.getAddress());

    return studentRepository.save(student);
}

    public void deleteStudent(Long id) {
        Student student = getStudentById(id);
        studentRepository.delete(student);
    }
}