import "./styles.css";
import { useState } from "react";

const initStudent = {
  name: "",
  age: "",
  std: "",
  add: "",
  isFemale: ""
};

export default function App() {
  const [student, setStudent] = useState(initStudent);
  const { name, std, age, add } = student;

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    // console.log(name,value);
    type === "checkbox"
      ? setStudent({
          ...student,
          [name]: checked
        })
      : setStudent({
          ...student,
          [name]: value
        });
  };

  return (
    <div className="App">
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        value={name}
      />
      <br />
      <input
        name="age"
        type="text"
        placeholder="Enter age"
        onChange={handleChange}
        // value={age}
      />
      <br />
      <input
        name="std"
        type="text"
        placeholder="Enter std"
        onChange={handleChange}
        value={std}
      />
      <br />
      <input
        name="add"
        type="text"
        placeholder="Enter add"
        onChange={handleChange}
        value={add}
      />
      <br />
      <input type="checkbox" onChange={handleChange} />
      <button
        onClick={() => {
          console.log(student);
        }}
      >
        click
      </button>
    </div>
  );
}
