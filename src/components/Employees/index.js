import React from "react";
import "./style.css";

let Employee = props => {
  return (
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.department}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>  
  );
}

export default Employee;