const db = require("../models");
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const { name, cpf, dataNasc } = req.body

    if (name && cpf && dataNasc) {
        try {
            db.person.create({ name, cpf, dataNasc })
            return res.status(200).send({ message: "success!" })

        } catch (error) {
            return res.status(400).send(error)
        }
    } else {
        return res.status(400).send({
            message: "Name, cpf e dataNac são obrigatórios!!"
        });

    }
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    db.person.findAll({ where: condition }).then(data => { 
        res.send(data); 
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving people."
        });
    });
};


exports.findOne = (req, res) => {
    const cpf = req.params.cpf;
    
    return db.person.findByPk(cpf).then(data => {
        res.status(200).send(data);
    }).catch(() => {
        return res.status(500).send({
            message: "Error retrieving Tutorial with id=" + cpf
        });
    });

};

exports.update = (req, res) => {
    const id = req.params.cpf;

    db.person.update(req.body, {
        where: { cpf: id }
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
    const cpf = req.params.cpf;

    db.person.destroy({
        where: { cpf: cpf }
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
exports.findAllPublished = (req, res) => {

};
