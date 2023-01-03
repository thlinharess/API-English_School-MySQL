'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: {
      type:DataTypes.STRING,
    validate:{
      validatorFunction: function(dado){
        if(dado.length < 3){
          throw new Error('The name field must be more than three characters')
        }
      }
    }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email type data'
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true,
    defaultScope: {
      where: { ativo:true }
    }, 
  scopes:{
   all: {where: {} },
  }
  });
  People.associate = function(models) {
    People.hasMany(models.Classes, {
      foreignKey: 'docente_id'
    })
    People.hasMany(models.Enrollments, {
      foreignKey: 'student_id',
      scope:{ status: 'confirmado'},
      as: 'EnrolledClasses'
    })
  };
  return People;
};