const Joi = require('joi');

const validateHumanCategory = (humanCategory) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        start_age: Joi.number().required(),
        finish_age: Joi.number().required(),
        gender_id: Joi.number()
    })
    return schema.validate(humanCategory)
}
module.exports = {validateHumanCategory}