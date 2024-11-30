const { Payment } = require("../models");
const { validatePayment } = require("../validations/payment.validation");

exports.createPayment = async (req, res) => {
    const { error } = validatePayment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const payment = await Payment.create(req.body);
        res.status(201).send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).send("Payment not found");
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updatePayment = async (req, res) => {
    const { error } = validatePayment(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).send("Payment not found");
        await payment.update(req.body);
        res.send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) return res.status(404).send("Payment not found");
        await payment.destroy();
        res.send(payment);
    } catch (error) {
        res.status(500).send(error);
    }
}