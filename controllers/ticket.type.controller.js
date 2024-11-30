const { TicketType } = require("../models");
const { validateTicketType } = require("../validations/ticket.type.validation");

exports.createTicketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticketType = await TicketType.create(req.body);
        res.status(201).send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getTicketTypes = async (req, res) => {
    try {
        const ticketTypes = await TicketType.findAll();
        res.send(ticketTypes);
    } catch (error) {
        res.status(500).send(error);
    }
 
}

exports.getTicketTypeById = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket Type not found");
        res.send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateTicketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket Type not found");
        await ticketType.update(req.body);
        res.send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteTicketType = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket Type not found");
        await ticketType.destroy();
        res.send(ticketType);
    } catch (error) {
        res.status(500).send(error);
    }
}