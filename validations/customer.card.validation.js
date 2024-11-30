const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        number: Joi.string().required(),
        year: Joi.number().required(),
        month: Joi.string().required(),
        is_active: Joi.boolean().required(),
        is_main: Joi.boolean().required(),
    })
    return schema.validate(customerCard);
}

module.exports = { validateCustomerCard };