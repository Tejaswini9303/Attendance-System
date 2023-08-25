import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    // Add more students
  ]);

  const handleAttendanceChange = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="student-list">
      {students.map((student) => (
        <div key={student.id} className="student">
          <span>{student.name}</span>
          <input
            type="checkbox"
            checked={student.present}
            onChange={() => handleAttendanceChange(student.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default StudentList;
