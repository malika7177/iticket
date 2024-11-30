const Joi = require('joi');

const validateCustomerAddress = (address) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        name: Joi.string().required(),
        country_id: Joi.number(),
        region_id: Joi.number(),
        district_id: Joi.number(),
        street: Joi.string().required(),
        house: Joi.string().required(),
        flat_id: Joi.number(),
        location: Joi.string().required(),
        post_index: Joi.string().required(),
        info: Joi.string().required()
    })
    return schema.validate(address);
}

module.exports = { validateCustomerAddress };