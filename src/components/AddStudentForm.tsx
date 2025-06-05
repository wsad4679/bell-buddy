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
            <label >Imie: <input type="text" onChange={handleChange } value={student.name} name="name"/></label>
            <br/>
            <label>Nazwisko: <input type="text" onChange={handleChange} value={student.surname} name="surname"/></label>
            <br/>
            <label>Czy obecny: <input type="checkbox" onChange={handleChange} checked={student.isPresent} name="isPresent"/></label>
            <br/>
            <button type="submit" >Dodaj ucznia</button>
        </form>
    )
}

export default AddStudentForm