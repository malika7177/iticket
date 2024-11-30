const Joi = require('joi');

const validateCustomer = (customer) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone: Joi.string().required(),
        hashed_password: Joi.string().min(4).required(),
        email: Joi.string().required(),
        birth_date: Joi.date().required(),
        gender_id: Joi.number(),
        language_id: Joi.number(),
        hashed_refresh_token: Joi.string().required(),
    })
    return schema.validate(customer);
}

module.exports = validateCustomer;