
'use strict';
module.exports = function (sequelize, Sequelize) {
  return  sequelize.define("person", {
    cpf: {
      primaryKey: true,
      type: Sequelize.STRING(100)
    },
    name: {
      type: Sequelize.STRING(100)
    },
    dataNasc:{
      type: Sequelize.STRING(100)
    }
    
  }, {
    sequelize,
    tableName: 'person',
    timestamps: false,
  });
};
