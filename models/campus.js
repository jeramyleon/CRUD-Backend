const {Sequelize, DataTypes}= require('sequelize');

const {db} = require('../database');

const campus = db.define(
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



campus.sync().then(() => {
  console.log("Campus tables synced!✅");
});

module.exports = campus;



