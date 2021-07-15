
'use strict';
module.exports =  function (sequelize, Sequelize) {
    return  sequelize.define("adress", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(100)
        },
        cep: {
            type: Sequelize.STRING(100)
        },
        logradouro: {
            type: Sequelize.STRING(100)
        },
        numero: {
            type: Sequelize.STRING(100)
        },
        bairro: {
            type: Sequelize.STRING(100)
        },
        cidade: {
            type: Sequelize.STRING(100)
        },
        estado: {
            type: Sequelize.STRING(100)
        },
        complemento: {
            type: Sequelize.STRING(100)
        },
        personCpf: {
            type: Sequelize.STRING(100),
            allowNull: false,
            references: {        
                model: {
                    tableName: 'person',
                },
                key: 'cpf'
            }
        },
    }, {
        sequelize,
        tableName: 'adress',
        timestamps: false,
    });
};
