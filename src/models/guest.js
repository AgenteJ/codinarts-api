'use strict';
module.exports = function (sequelize, Sequelize) {
    return sequelize.define("guest", {
        cpf: {
            primaryKey: true,
            type: Sequelize.STRING(100)
        },
        name: {
            type: Sequelize.STRING(100)
        },
        dataNasc: {
            type: Sequelize.STRING(100)
        },
        adressId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {        
                model: {
                    tableName: 'adress',
                },
                key: 'id'
            }
        },
    }, {
        sequelize,
        tableName: 'guest',
        timestamps: false,
    });
};
