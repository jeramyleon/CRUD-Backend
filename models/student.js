const {Sequelize, DataTypes}= require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Campus = require('./campus.js')

const Student = sequelize.define(
    'students',
    {
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email:{
            type: DataTypes.TEXT,
            allowNull: false,
             validate:{
                notEmpty: true,
                isEmail: true,
            },
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://cdn-icons-png.flaticon.com/512/70/70906.png',
        },
        gpa:{
            type:DataTypes.DECIMAL(3, 2),
            allowNull: false,
            validate:{
                min:0.0,
                max:4.0,
            },
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
            },
        },
    }
);

module.exports = Student;

Student.belongsTo(Campus);
Campus.hasMany(Student);

sequelize.sync({ force: true }).then(() => {
  console.log("Sequelize table operational");
});


