const { VenueType } = require("../models");
const { validateVenueType } = require("../validations/venue.type.validation")

exports.createVenueType = async (req, res) => {
    const {error} = validateVenueType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venueType = await VenueType.create(req.body);
        res.status(201).send(venueType)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getVenueType = async (req, res) => {
    try {
        const venueType = await VenueType.findAll();
        res.status(200).send(venueType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getVenueTypeById = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found.");
        res.status(200).send(venueType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateVenueType = async (req, res) => {
    const {error} = validateVenueType(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found.");
        await venueType.update(req.body);
        res.status(200).send(venueType);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteVenueType = async (req, res) => {
    try {
        const venueType = await VenueType.findByPk(req.params.id);
        if (!venueType) return res.status(404).send("Venue type not found.");
        await venueType.destroy();
        res.status(200).send("Venue type deleted.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}