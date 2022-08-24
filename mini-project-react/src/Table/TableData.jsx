import React from "react";
import data from "../data";
import "./TableData.css";

function TableData() {
  return (
    <div>
      <table className="table table-bordered tableCustom">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>
            <th scope="col">Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.nombre}</td>
              <td>{d.edad}</td>
              <td>{d.carrera}</td>
              <td>{d.hobbie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
