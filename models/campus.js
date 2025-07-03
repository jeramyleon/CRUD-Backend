const {Sequelize, DataTypes}= require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const students = require('./student.js');

const campus = sequelize.define(
    'campus',
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://cdn-icons-png.flaticon.com/512/68/68286.png',
        },
        description:{
            type:DataTypes.TEXT('long'),
            allowNull: false,
            validate:{
                notEmpty: true,
            },
        },
    }
);

campus.hasMany(students);
students.belongsTo(campus);

campus.sync().then(() => {
  console.log("Campus tables synced!✅");
});

module.exports = campus;



