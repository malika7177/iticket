const {Region} = require("../models")
const validateRegion = require("../validations/region.validation")

exports.createRegion = async (req, res) => {
    const {error} = validateRegion(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const region = await Region.create(req.body);
        res.status(201).send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getRegions = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.send(regions);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getRegionById = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");
        res.send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateRegion = async (req, res) => {
    const {error} = validateRegion(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");
        await region.update(req.body);
        res.send(region);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");
        await region.destroy();
        res.send("Region deleted successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
}