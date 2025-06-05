import './App.css'
import Clock from './components/Clock.tsx'
import StudentList from './components/StudentList.tsx'
import AddStudentForm from './components/AddStudentForm.tsx'
import type {Student} from "./types/Student.ts";
import {useState} from "react";

function App() {

    const [studentsList, setStudents] = useState<Student[]>(
        () =>{
        const savedStudents = localStorage.getItem('students');
        return savedStudents ? JSON.parse(savedStudents) : []
        });

    function getStudentData(student: Student) {
        setStudents(prevState => {
            const updatedList = [...prevState, student];
            localStorage.setItem('students', JSON.stringify(updatedList)); // ✅ zapisujemy całą listę
            return updatedList;
        });
    }

    function updateStudentAttendance(id: number, isPresent: boolean) {
        setStudents(prev =>
            prev.map(student =>
                student.id === id ? { ...student, isPresent } : student
            )
        );
    }


    const [showClock, setShowClock] = useState(false);
    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(true);



  return (
      <>
          <h2>Widoczność komponentów:</h2>
          <label>
              <input
                  type="checkbox"
                  checked={showClock}
                  onChange={() => setShowClock(prev => !prev)}
              />
              Zegar
          </label>
          <label>
              <input
                  type="checkbox"
                  checked={showList}
                  onChange={() => setShowList(prev => !prev)}
              />
              Lista uczniów
          </label>
          <label>
              <input
                  type="checkbox"
                  checked={showForm}
                  onChange={() => setShowForm(prev => !prev)}
              />
              Formularz dodawania ucznia
          </label>

          <hr />

          {showClock && <Clock />}
          {showList && (
              <StudentList
                  students={studentsList}
                  onToggleAttendance={updateStudentAttendance}
              />
          )}
          {showForm && <AddStudentForm addStudent={getStudentData} />}
      </>
  );
}

export default App
