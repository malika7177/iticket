const { EventType } = require("../models");
const { validateEventType } = require("../validations/event.type.validation");

exports.createEventType = async (req, res) => {
    const { error } = validateEventType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const eventType = await EventType.create(req.body);
        res.status(200).send(eventType);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

exports.getEventType = async (req, res) => {
    try {
        const eventType = await EventType.findAll();
        res.status(200).send(eventType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getEventTypeById = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).send("Event type not found");
        res.status(200).send(eventType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateEventType = async (req, res) => {
    const { error } = validateEventType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).send("Event type not found");
        await eventType.update(req.body);
        res.status(200).send(eventType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteEventType = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).send("Event type not found");
        await eventType.destroy();
        res.status(200).send(eventType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}