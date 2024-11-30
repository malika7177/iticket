const { Seat, Venue, SeatType, Sector } = require("../models");
const { validateSeat } = require("../validations/seat.validation");

exports.createSeat = async(req, res) => {
    const { error } = validateSeat(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seat = await Seat.create(req.body);
        res.status(201).send(seat);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getSeats = async(req, res) => {
    try {
        const seats = await Seat.findAll();
        res.send(seats);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getSeatById = async(req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id, {
            include: [
                {
                    model: SeatType,
                    as: "seatType",
                },
                {
                    model: Venue,
                    as: "venue"
                },
                {
                    model: Sector,
                    as: "sector"
                }
            ]
        });
        if (!seat) return res.status(404).send("Seat not found");
        res.send(seat);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateSeat = async(req, res) => {
    const { error } = validateSeat(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).send("Seat not found");
        await seat.update(req.body);
        res.send(seat);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteSeat = async(req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).send("Seat not found");
        await seat.destroy();
        res.send(seat);
    } catch (error) {
        res.status(500).send(error);
    }
}