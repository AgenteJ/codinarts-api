const db = require("../models");
const Op = db.Sequelize.Op;
const sql = db.contact;

exports.create = (req, res) => {
    const { name, contato } = req.body
    var personCpf = req.body.personCpf.replace(/\D/g, "");
    const contact = contato;
    if (name && contact && personCpf) {
        try {
            sql.create({ name, contact, personCpf })
            return res.status(200).send({ message: "success!" })

        } catch (error) {
            return res.status(400).send(error)
        }
    } else {
        return res.status(400).send({
            message: "name, contact e personCpf são obrigatórios!!"
        });

    }
};

exports.findAll = (req, res) => {
    const id = req.params.id.replace(/\D/g, "");
    sql.findAll({ where: { personCpf: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id.replace(/\D/g, "");
    const {name, contato} = req.body;
    const contact = contato;
    sql.update({name, contact}, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update. Maybe was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating person with cpf=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id.replace(/\D/g, "");

    sql.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete. Maybe was not found!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete person with cpf=" + cpf
        });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials

