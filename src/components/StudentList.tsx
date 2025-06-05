import React, { useState } from "react";
import StudentItem from "./StudentItem.tsx";

interface Student {
    id: number;
    name: string;
    surname: string;
    isPresent: boolean;
}

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: "Jan", surname: "Kowalski", isPresent: false },
        { id: 2, name: "Anna", surname: "Nowak", isPresent: false },
        { id: 3, name: "Tomasz", surname: "Wiśniewski", isPresent: false },
    ]);

    const handleAttendanceChange = (id: number, isPresent: boolean) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id ? { ...student, isPresent } : student
            )
        );
    };

    return (
        <ul>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                    onChange={handleAttendanceChange}
                />
            ))}
        </ul>
    );
};

export default StudentList;
