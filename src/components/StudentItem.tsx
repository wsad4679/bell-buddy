import React from "react";
import type {Student} from "../types/Student.ts";




interface StudentItemProps {
    student: Student;
    onChange: (id: number, isPresent: boolean) => void;
}


const StudentItem: React.FC<StudentItemProps> = ({ student, onChange }) => {
    return (
        <li className="student-item">
            <p>
                {student.name} {student.surname} <br/>(ID: {student.id})
            </p>
            <label>
                <input
                    type="radio"
                    name={`presence-${student.id}`}
                    checked={student.isPresent}
                    onChange={() => onChange(student.id, true)}
                />
                Obecny
            </label>
            <label>
                <input
                    type="radio"
                    name={`presence-${student.id}`}
                    checked={!student.isPresent}
                    onChange={() => onChange(student.id, false)}
                />
                Nieobecny
            </label>
        </li>
    );
};

export default StudentItem;