const {  Event, Seat, Status, TicketType, Ticket } = require("../models");
const { validateTicket } = require("../validations/ticket.validation");

exports.createTicket = async (req, res) => {
    const { error } = validateTicket(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).send(ticket);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.send(tickets);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id, {
            include: [
                {
                    model: Event,
                    as: "event",
                },
                {
                    model: Seat,
                    as: "seat",
                }, 
                {
                    model: Status,
                    as: "status",
                },
                {
                    model: TicketType,
                    as: "ticketType",
                }
            ]
        });
        if (!ticket) return res.status(404).send("Ticket not found");
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateTicket = async (req, res) => {
    const { error } = validateTicket(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).send("Ticket not found");
        await ticket.update(req.body);
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).send("Ticket not found");
        await ticket.destroy();
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error.message);
    }
}