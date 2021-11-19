import './App.css';
import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import EmployeeTable from './components/EmployeeTable.js';
import employeeData from './components/mockData.js'

function App() {
  let [ employees, setEmployees ] = useState(employeeData);
  let jobTypes = {};
  let jobs =[];
  let genderTypes = {};
  let genders =[];

  const jobTypeData = {
    labels: [],
    datasets: [
      {
        label: 'Employees By Job Type',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: []
      }
    ]
  }
  const genderData = {
    labels: [],
    datasets: [
      {
        label: 'Employees By Gender',
        backgroundColor: [
          'rgba(75,192,192,1)',
          'rgba(133,54,54,1)'
      ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
  }

  let jobType = () => {
    employees.forEach( (employee) => {
      jobTypes[employee.jobTitle] ? jobTypes[employee.jobTitle]++ : jobTypes[employee.jobTitle] = 1;
      genderTypes[employee.gender] ? genderTypes[employee.gender]++ : genderTypes[employee.gender] = 1;
    })

    for (let job in jobTypes) {
      jobTypeData.labels = [job, ...jobTypeData.labels];
      jobTypeData.datasets[0].data = [jobTypes[job], ...jobTypeData.datasets[0].data];
    }
    for (let gender in genderTypes) {
      genderData.labels = [gender, ...genderData.labels];
      genderData.datasets[0].data = [genderTypes[gender], ...genderData.datasets[0].data];
    }
  }

  const data = {
    labels: [42,32,53,23],
    datasets: [
      {
        label: 'Employees By Gender',
        backgroundColor: [
          'rgba(75,192,192,1)',
          'rgba(133,54,54,1)'
      ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: []
      }
    ]
  }

  jobType();
  console.log(jobs)

  return (
    <div className="App" >
      <div style={{display: "inline-flex", justifyContent: "center"}}>
      <EmployeeTable employees={employees}/>
      </div>
      <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <div style={{height: "500px", width: "400px"}}>
          <Pie
              data={jobTypeData}
              options={{
                title:{
                  display:true,
                  text:'Employees by Job Type',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
          <div style={{height: "500px", width: "400px"}}>
            <Bar
              data={genderData}
              options={{
                title:{
                  display:true,
                  text:'Employees by Gender',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'left'
                },
                responsive: true,
              }}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
