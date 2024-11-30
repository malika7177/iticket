const { VenuePhoto, Venue } = require("../models");
const { validateVenuePhoto } = require("../validations/venue.photo.validation")

exports.createVenuePhoto = async (req, res) => {
    const {error} = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venuePhoto = await VenuePhoto.create(req.body);
        res.status(201).send(venuePhoto)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getVenuePhotos = async (req, res) => {
    try {
        const venuePhotos = await VenuePhoto.findAll();
        res.send(venuePhotos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getVenuePhotoById = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                    as: "venue"
                }
            ]
        });
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        res.send(venuePhoto);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateVenuePhoto = async (req, res) => {
    const {error} = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        await venuePhoto.update(req.body);
        res.send(venuePhoto);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue Photo not found");
        await venuePhoto.destroy();
        res.status(200).send("Venue Photo deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}