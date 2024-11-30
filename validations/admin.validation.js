const Joi = require('joi');

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        login: Joi.string().required(),
        password: Joi.string().min(4).required(),
        is_active: Joi.boolean().required(),
        is_creator: Joi.boolean().required(),
    })
    return schema.validate(admin);
}

module.exports = validateAdmin;