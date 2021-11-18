import './App.css';
import { useState, useEffect } from 'react';
import EmployeeTable from './components/EmployeeTable.js';
import employeeData from './components/mockData.js'

function App() {
  let [ employees, setEmployees ] = useState(employeeData);



  return (
    <div className="App">
      {console.log(employees)}
      <EmployeeTable employees={employees}/>
    </div>
  );
}

export default App;
