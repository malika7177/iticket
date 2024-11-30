const Joi = require("joi");

const validateVenuePhoto = (venuePhoto) => {
  const schema = Joi.object({
    url: Joi.string().required(),
    venue_id: Joi.number(),
  });
  return schema.validate(venuePhoto);
};

module.exports = { validateVenuePhoto };
