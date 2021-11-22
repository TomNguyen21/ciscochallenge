import React, { useState } from 'react';
// import employeeData from './mockData.js';
import Employee from './Employee.js';
import '../App.css'

let EmployeeTable = (props) => {
  let  employeeData  = props.employees;
  let sortedData = [...employeeData];


  let [ sortedField, setSortedField ] = useState(null);

  if (sortedField !== null){
    if (sortedField === "tenure") {
      sortedData.sort( (a,b) => {
        return a[sortedField] - b[sortedField]
      })
    } else {
      sortedData.sort( (a, b) => {
        // strings are sorted differently from integers
        return a[sortedField].localeCompare(b[sortedField])
      })
    }
  }

  return (
    <div>
      <table>

      <thead>
        <tr>
          <th>
              <button className="Column-Button" type="button" onClick={() => setSortedField('name')}>
                Name
              </button>
            </th>
          <th>
            <button className="Column-Button" type="button" onClick={() => setSortedField('jobTitle')}>
              Job Title
            </button>
          </th>
          <th>
            <button className="Column-Button" type="button" onClick={() => setSortedField('tenure')}>
              Tenure
            </button>
          </th>
          <th>
            <button className="Column-Button" type="button" onClick={() => setSortedField('gender')}>
              Gender
            </button>
          </th>
        </tr>
        </thead>
        <tbody>
      { sortedData.map( (employee) => {
        return (
          <Employee key={employee._id} employee={employee} />
        )
      })}
      </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable;

