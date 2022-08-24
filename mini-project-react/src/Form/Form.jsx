import React, { useState } from "react";
import "./Form.css";

function Form() {
  const obj = {
    nombre: "",
    carrera: "",
    edad: "",
  };

  const [inputValues, setInputValues] = useState(obj);
  const [users, setUsers] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    setInputValues(obj);
    console.log(inputValues);
    setUsers((prev) => [...prev, inputValues]);
  }

  return (
    <div className="formDiv">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={inputValues.nombre}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="career">Carrera</label>
        <input
          type="text"
          name="carrera"
          value={inputValues.carrera}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="age">Edad</label>
        <input
          type="text"
          name="edad"
          value={inputValues.edad}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>

      <table className="table table-bordered tableCustom">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          {users.map((d, i) => (
            <tr key={i}>
              <td>{d.nombre}</td>
              <td>{d.carrera}</td>
              <td>{d.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
