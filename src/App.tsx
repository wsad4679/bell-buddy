import './App.css'
import Clock from './components/Clock.tsx'
import StudentList from './components/StudentList.tsx'
import AddStudentForm from './components/AddStudentForm.tsx'
import type {Student} from "./types/Student.ts";
import {useState} from "react";

function App() {

    const [studentsList, setStudents] = useState<Student[]>([]);

    function getStudentData (student: Student) {
        setStudents(prevState => [...prevState, student]);
    }

    function updateStudentAttendance(id: number, isPresent: boolean) {
        setStudents(prev =>
            prev.map(student =>
                student.id === id ? { ...student, isPresent } : student
            )
        );
    }





  return (
    <>
      <Clock/>

      <StudentList students= {studentsList} onToggleAttendance={updateStudentAttendance} />


      <AddStudentForm addStudent={getStudentData}/>
    </>
  )
}

export default App
