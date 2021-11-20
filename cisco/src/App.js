import './App.css';
import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import EmployeeTable from './components/EmployeeTable.js';
import employeeData from './components/mockData.js';
import Modal from './components/AddPersonModal.js';

function App() {
  let [ employees, setEmployees ] = useState(employeeData);
  let [ showModal, setShowModal ] = useState(false);
  let jobTypes = {};
  let genderTypes = {};

  const addPerson = (person) => {
    setEmployees([person, ...employees]);
    jobType();
  }
  const jobTypeData = {
    labels: [],
    datasets: [
      {
        label: 'Employees By Job Type',
        backgroundColor: [
          '#eb5757',
          '#56ccf2',
          '#be79ff',
          '#f2c94c',
          '#50cc85',
        ],
        hoverBackgroundColor: [
        '#ce4c4c',
        '#41b1d6',
        '#8f59c1',
        '#c5a441',
        '#3d9f67',
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
          '#ff8686',
          '#0381dc'
      ],
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
  jobType();


  return (
    <div className="App" >

      <button className="Add-Person" onClick={() => setShowModal(true)}>Add Person</button>
      <Modal show={showModal} onClose={ () => setShowModal(false)} addPerson={ (e) => addPerson(e)}/>
      <div className="Table" style={{display: "inline-flex", justifyContent: "center"}}>
      <EmployeeTable employees={employees}/>
      </div>

      <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <div>
          <Pie
              className='Chart'
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
          <div>
            <Bar
              className="Chart"
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
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
