const { Cart, Ticket, Customer, Status } = require("../models");
const { validateCart } = require("../validations/cart.validation");

exports.createCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const cart = await Cart.create(req.body);
        res.status(201).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll();
        res.send(carts);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id, {
            include: [
                {
                    model: Ticket,
                    as: "ticket",
                },
                {
                    model: Customer,
                    as: "customer"
                },
                {
                    model: Status,
                    as: "status"
                }
            ]
        });
        if (!cart) return res.status(404).send("Cart not found");
        res.send(cart);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found");
        await cart.update(req.body);
        res.send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found");
        await cart.destroy();
        res.send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
}