const Joi = require('joi');

const validateRegion = (gender) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        postpone: Joi.number().required(),
    })
    return schema.validate(gender);
}
module.exports = validateRegion;