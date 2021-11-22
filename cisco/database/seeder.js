const db = require('./db.js');
const mongoose = require('mongoose');
const mockData = require('../src/components/mockData.js');

// let data = mongoose.connection;
const seeder = () => {
  // data.dropDatabase();
  for (let i = 0; i < mockData.employeeData.length; i++) {
    const newEmployee = new db.employee({
      employeeId: i,
      name: mockData.employeeData[i].name,
      jobTitle: mockData.employeeData[i].jobTitle,
      tenure: mockData.employeeData[i].tenure,
      gender: mockData.employeeData[i].gender,
    });
    newEmployee.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

seeder();

// module.exports.seeder = seeder;