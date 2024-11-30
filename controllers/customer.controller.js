const { Customer, Gender, Language } = require("../models");
const validateCustomer = require("../validations/customer.validation");

exports.createCustomer = async (req, res) =>{ 
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer = await Customer.create(req.body);
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [
                {
                    model: Gender,
                    as: "gender",
                },
                {
                    model: Language,
                    as: "language",
                }
            ]
        });
        if (!customer) return res.status(404).send("Customer not found");
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");
        await customer.update(req.body);
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");
        await customer.destroy();
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
}