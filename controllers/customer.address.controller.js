const { CustomerAddress, Customer, Country, Region, District, Flat } = require("../models");
const { validateCustomerAddress } = require("../validations/customer.address.validation")

exports.createCAdress = async (req, res) => {
    const {error} = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerAddress = await CustomerAddress.create(req.body);
        res.status(201).send(customerAddress);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCAddresses = async (req, res) => {
    try {
        const customerAddresses = await CustomerAddress.findAll();
        res.send(customerAddresses);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCAddressById = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customer"
                },
                {
                    model: Country,
                    as: "country"
                },
                {
                    model: Region,
                    as: "region"
                },
                {
                    model: District,
                    as: "district"
                },
                {
                    model: Flat,
                    as: "flat"
                }
            ]
        });
        if (!customerAddress) return res.status(404).send("Customer address not found");
        res.send(customerAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateCAddress = async (req, res) => {
    const {error} = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send("Customer address not found");
        await customerAddress.update(req.body);
        res.send(customerAddress);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteCAddress = async (req, res) => {
    try {
        const customerAddress = await CustomerAddress.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send("Customer address not found");
        await customerAddress.destroy();
        res.send(customerAddress);
    } catch (error) {
        res.status(500).send(error);
    }
}