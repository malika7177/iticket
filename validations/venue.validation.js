const Joi = require("joi");

const validateVenue = (venue) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    location: Joi.string().required(),
    site: Joi.string().required(),
    phone: Joi.string().required(),
    schema: Joi.string().required(),
    district_id: Joi.number(),
    region_id: Joi.number(),
    venue_type_id: Joi.number(),
  });
  return schema.validate(venue);
};
module.exports = { validateVenue };
