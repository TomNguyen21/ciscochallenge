import React, { useState, useEffect } from 'react';
import employeeData from './mockData.js';
// import Employee from './Employee.js';

let EmployeeTable = (props) => {
  let { employees, setEmployees } = useState(employeeData);

  return (
    <div>
      { employees.map ((employee) => {
        <div>{employee.name}</div>}
      )}
    </div>
  )
}

export default EmployeeTable;

// {currentPage.map( (place) =>
//   <MorePlacesEntry key={place.propertyId} place={place} />
// )}