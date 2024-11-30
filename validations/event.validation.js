const Joi = require('joi');

const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.string().required(),
        start_date: Joi.date().required(),
        start_time: Joi.string().required(),
        finish_date: Joi.date().required(),
        finish_time: Joi.string().required(),
        info: Joi.string().required(),
        release_date: Joi.date().required(),
        event_type_id: Joi.number(),
        human_category_id: Joi.number(),
        venue_id: Joi.number(),
        language_id: Joi.number(),
    })
    return schema.validate(event);
}

module.exports = { validateEvent };