import React, {useState} from "react";
import type {Student} from "../types/Student.ts";

interface AddStudent {
    addStudent: (student: Student) => void;
}

const AddStudentForm = ({addStudent}: AddStudent) =>
{

    const [student, setStudent] = useState<Omit<Student, 'id'>>({
        name: "",
        surname: "",
        isPresent: false,
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value, type, checked} = event.target as HTMLInputElement;
        setStudent(prevState => ({...prevState, [name]: type === "checkbox" ? checked : value}));
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const idStudent : Student= {
            ...student,
            id: Date.now()
        }

        addStudent(idStudent);

    }

    return(
        <form onSubmit={handleSubmit}>
        <h3>Student Form</h3>
        Imie: <input type="text" onChange={handleChange } value={student.name} name="name"/>
        Nazwisko: <input type="text" onChange={handleChange} value={student.surname} name="surname"/>
        Czy obecny: <input type="checkbox" onChange={handleChange} checked={student.isPresent} name="isPresent"/>
            <button type="submit" >Dodaj ucznia</button>
        </form>
    )
}

export default AddStudentForm