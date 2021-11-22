const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI;
mongoose.connect('mongodb://localhost/employees');

// const mongoose = require('mongoose');

// // mongoose.connect('mongodb://database:27017/morePlaces');
// mongoose.connect('mongodb://localhost/morePlaces');

const Employee = mongoose.Schema({
  employeeId: Number,
  name: String,
  jobTitle: String,
  tenure: Number,
  gender: String,
});

const employee = mongoose.model('Employee', Employee);

const getEmployees = (req, callback) => {
  employee.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      let newArray = [];
      for (let i = 0; i < results[0].similarPlaces.length; i += 1) {
        employee.find({}, (err, result) => {
          if (err) {
            callback(err);
          } else {
            newArray.push(result[0]);
          };
        });
      };
      setTimeout( () => {
        callback(null, newArray);
      }, 1000)
    }
  })
}

module.exports.getEmployees = getEmployees;
module.exports.employee = employee;
