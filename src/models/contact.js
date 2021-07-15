
'use strict';
module.exports = function (sequelize, Sequelize) {
    return sequelize.define("contact", {
        name: {
            type: Sequelize.STRING(100)
        },
        contact: {
            type: Sequelize.STRING(100)
        },
        personCpf: {
            type: Sequelize.STRING(100),
            allowNull: false,
            references: {         // User hasMany WorkingDays n:n
                model: {
                    tableName: 'person',
                },
                key: 'cpf'
            }
        },
    }, {
        sequelize,
        tableName: 'contact',
        timestamps: false,
    });
};
