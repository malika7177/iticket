const Joi = require("joi");

const validateTicketType = (ticketType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
  });
  return schema.validate(ticketType);
};

module.exports = { validateTicketType };
