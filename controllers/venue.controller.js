const { Venue, Region, District, VenueType } = require("../models");
const { validateVenue } = require("../validations/venue.validation");

exports.createVenue = async (req, res) => {
    const { error } = validateVenue(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venue = await Venue.create(req.body);
        res.status(201).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getVenues = async (req, res) => {
    try {
        const venues = await Venue.findAll();
        res.send(venues);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getVenueById = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id, {
            include: [
                {
                    model: VenueType,
                    as: "VenueType",
                },
                {
                    model: District,
                    as: "district",
                },
                {
                    model: Region,
                    as: "region",
                }
            ]
        });
        if (!venue) return res.status(404).send("Venue not found.");
        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateVenue = async (req, res) => {
    const { error } = validateVenue(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venue = await Venue.findByPk(req.params.id);
        if (!venue) return res.status(404).send("Venue not found.");
        await venue.update(req.body);
        res.status(200).send(venue);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteVenue = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id);
        if (!venue) return res.status(404).send("Venue not found.");
        await venue.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}