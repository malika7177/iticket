const Joi = require("joi");

const validateDistrict = (district) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    region_id: Joi.number(),
  });
  return schema.validate(district);
};

module.exports = { validateDistrict };
