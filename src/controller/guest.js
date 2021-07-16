let db;
let sql;
init();

async function init() {
    db = await require("../models");
    sql = await db.guest;
}

exports.create = (req, res) => {
    req.body.adressId = req.body.adressId.replace(/\D/g, "");
    try {
        sql.create(req.body)
        return res.status(200).send({ message: "success!" })

    } catch (error) {
        return res.status(400).send(error)
    }
};

exports.findAll = (req, res) => {
    const id = req.params.id.replace(/\D/g, "");
    sql.findAll({ where: { adressId: id } })
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

exports.moreGuest = (req, res) => {
    const qr = "SELECT adress.name, COUNT(guest.cpf) AS Total FROM adress LEFT JOIN guest ON adress.id = guest.adressId GROUP BY adress.name";
    db.sequelize.query(qr, { type: db.sequelize.QueryTypes.SELECT })
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving people."
            });
        });
};


exports.update = (req, res) => {
    const id = req.params.id.replace(/\D/g, "");
    const { name, dataNasc, adress } = req.body;
    sql.update({ name, dataNasc, adress }, {
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
    const id = req.params.id.replace(/\D/g, "");

    sql.destroy({
        where: { cpf: id }
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

