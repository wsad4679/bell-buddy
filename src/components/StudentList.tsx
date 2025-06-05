import StudentItem from "./StudentItem.tsx";
import type {Student} from "../types/Student.ts";

interface StudentListProps {
    students: Student[];
    onToggleAttendance: (id: number, isPresent: boolean) => void;

}

const StudentList = ({students, onToggleAttendance} : StudentListProps) => {

    return (
        <ul>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                    onChange={onToggleAttendance}
                />
            ))}
        </ul>
    );
};

export default StudentList;
