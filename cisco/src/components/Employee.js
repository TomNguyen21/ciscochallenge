import React from 'react';


let Employee = (props) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.jobTitle}</td>
      <td>{props.employee.tenure}</td>
      <td>{props.employee.gender}</td>
    </tr>
  )
}



export default Employee;