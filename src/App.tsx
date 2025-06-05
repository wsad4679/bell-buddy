import './App.css'
import Clock from './components/Clock.tsx'
import StudentList from './components/StudentList.tsx'
import AddStudentForm from './components/AddStudentForm.tsx'
import type { Student } from "./types/Student.ts";
import { useState } from "react";
import CountDownTimer from "./components/CountDownTimer.tsx";

function App() {

    const [studentsList, setStudents] = useState<Student[]>(() => {
        const savedStudents = localStorage.getItem('students');
        return savedStudents ? JSON.parse(savedStudents) : []
    });

    function getStudentData(student: Student) {
        setStudents(prevState => {
            const updatedList = [...prevState, student];
            localStorage.setItem('students', JSON.stringify(updatedList));
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

    const [showClock, setShowClock] = useState(true);
    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);


    return (
        <div className="app-container">
                <header className="top-bar">
                    <div className="navigation">
                        <h2>Kontrola komponentów:</h2>
                        <label>
                            <input type="checkbox" checked={showClock} onChange={() => setShowClock(p => !p)} />
                            <span>Zegar i licznik</span>
                        </label>
                        <label>
                            <input type="checkbox" checked={showList} onChange={() => setShowList(p => !p)} />
                            Lista uczniów
                        </label>
                        <label>
                            <input type="checkbox" checked={showForm} onChange={() => setShowForm(p => !p)} />
                            Formularz ucznia
                        </label>
                    </div>
                    {showClock && <div className="timer"><Clock /></div>}
                    {
                        showCountDown && <div className="timer"><CountDownTimer/></div>
                    }
                    <div className="timer">
                        <button onClick={() => setShowCountDown(true)}>Pokaż Licznik</button>
                        <button onClick={() => setShowCountDown(false)}>Schowaj Licznik</button>
                    </div>
                </header>

            <main className="main-content">
                {showForm && (
                    <section className="left-section">
                        <AddStudentForm addStudent={getStudentData} />
                    </section>
                )}

                {showList && (
                    <section className="students">
                        <StudentList
                            students={studentsList}
                            onToggleAttendance={updateStudentAttendance}
                        />
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
