const { validateSector } = require("../validations/sector.validation");
const { Sector } = require("../models");

exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const sector = await Sector.create(req.body);
    res.status(201).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSector = async (req, res) => {
    try {
        const sector = await Sector.findAll();
        res.status(200).send(sector)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getSectorById = async (req, res) => {
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found");
        res.status(200).send(sector);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateSector = async (req, res) => {
    const { error } = validateSector(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found");
        await sector.update(req.body);
        res.status(200).send(sector);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteSector = async (req, res) => {
    try {
        const sector = await Sector.findByPk(req.params.id);
        if (!sector) return res.status(404).send("Sector not found");
        await sector.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
}