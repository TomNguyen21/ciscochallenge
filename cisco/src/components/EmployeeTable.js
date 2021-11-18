import React, { useState, useEffect } from 'react';
// import employeeData from './mockData.js';
import Employee from './Employee.js';

let EmployeeTable = (props) => {


  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Job Title</th>
          <th>Tenure</th>
          <th>Gender</th>
        </tr>
      { props.employees.map( (employee) => {
        return (
          <Employee employee={employee} />
        )
      })}
      </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable;

// {currentPage.map( (place) =>
//   <MorePlacesEntry key={place.propertyId} place={place} />
// )}