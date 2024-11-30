const { Status } = require("../models");
const { validateStatus } = require("../validations/status.validation");

exports.createStatus = async (req, res) => {
    const { error } = validateStatus(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const status = await Status.create(req.body);
        res.status(201).send(status);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.getStatuses = async (req, res) => {
    try {
        const statuses = await Status.findAll();
        res.status(200).send(statuses);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

exports.getStatusById = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");
        res.status(200).send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateStatus = async (req, res) => {
    const { error } = validateStatus(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");
        await status.update(req.body);
        res.send(status);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (!status) return res.status(404).send("Status not found");
        await status.destroy();
        res.status(200).send("Status deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}