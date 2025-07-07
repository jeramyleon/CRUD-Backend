const { db } = require("../database");
const campus = require("./campus");
const Student = require("./student");
campus.hasMany(Student);
Student.belongsTo(campus);

module.exports = {
  db,
  Student,
  campus,
};
