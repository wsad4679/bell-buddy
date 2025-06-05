import React, {useState} from "react";

const AddStudentForm = () =>
{
    interface Student {
        id: number;
        name: string;
        surname: string;
        isPresent: boolean;
    }

    const [students, setStudents] = useState<Student>({
        id: 0,
        name: "",
        surname: "",
        isPresent: false,
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value, type, checked} = event.target as HTMLInputElement;
        setStudents(prevState => ({...prevState, [name]: type === "checkbox" ? checked : value}));
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

    }

    return(
        <form onSubmit={handleSubmit}>
        <h3>Student Form</h3>
        Imie: <input type="text" onChange={handleChange } value={students.name} name="name"/>
        Nazwisko: <input type="text" onChange={handleChange} value={students.surname} name="surname"/>
        Czy obecny: <input type="checkbox" onChange={handleChange} checked={students.isPresent} name="isPresent"/>
        </form>
    )
}

export default AddStudentForm