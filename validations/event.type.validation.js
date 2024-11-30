const Joi = require('joi');

const validateEventType = (eventType) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        parent_event_type: Joi.string().required(),
    })
    return schema.validate(eventType);
}

module.exports = { validateEventType };