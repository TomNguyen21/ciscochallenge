const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI;
mongoose.connect('mongodb://localhost/employees');

// const mongoose = require('mongoose');

// // mongoose.connect('mongodb://database:27017/morePlaces');
// mongoose.connect('mongodb://localhost/morePlaces');

const employees = mongoose.Schema({
  name: String,
  jobTitle: String,
  tenure: Number,
  gender: String,
});

const employee = mongoose.model('Employee', employees);

const getEmployees = (req, callback) => {
  employee.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      let newArray = [];
        employee.find({}, (err, result) => {
          if (err) {
            callback(err);
          } else {
            newArray.push(...result);
          };
        });
      setTimeout( () => {
        callback(null, newArray);
      }, 1000)
    }
  })
}

const addEmployee = (req, callback) => {
  const newEmployee = new employee({
    name: req.name,
    jobTitle: req.jobTitle,
    tenure: req.tenure,
    gender: req.gender,
  });
  newEmployee.save(newEmployee);
  setTimeout( () => {
    callback(null, 'done!')
  })
}

module.exports.getEmployees = getEmployees;
module.exports.addEmployee = addEmployee;
module.exports.employee = employee;
