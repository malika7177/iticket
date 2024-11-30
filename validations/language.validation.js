const Joi = require('joi');

const validateLanguage = (lang) => {
    const schema = Joi.object({
        language: Joi.string().required(),
        description: Joi.string().required(),
    })
    return schema.validate(lang);
}

module.exports = { validateLanguage }