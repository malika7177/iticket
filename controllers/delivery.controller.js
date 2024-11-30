const {Delivery} = require("../models")
const { validateDelivery } = require("../validations/delivery.validation")

exports.createDelivery = async(req, res) =>{
    const {error} = validateDelivery(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.create(req.body);
        res.status(201).send(delivery);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

exports.getDeliveries = async(req, res) => {
    try {
        const deliveries = await Delivery.findAll();
        res.status(200).send(deliveries);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

exports.getDeliveryById = async(req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if(!delivery) return res.status(404).send("Delivery not found");
        res.status(200).send(delivery);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateDelivery = async(req, res) => {
    const {error} = validateDelivery(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if(!delivery) return res.status(404).send("Delivery not found");
        await delivery.update(req.body);
        res.status(200).send(delivery);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteDelivery = async(req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);
        if(!delivery) return res.status(404).send("Delivery not found");
        await delivery.destroy();
        res.status(204).send("Delivery deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
}