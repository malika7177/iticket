const { HumanCategory, Gender } = require("../models");
const {
  validateHumanCategory,
} = require("../validations/human.category.validation");

exports.createHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const humanCategory = await HumanCategory.create(req.body);
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findAll();
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id, {
      include: [
        {
          model: Gender,
          as: "gender",
        },
      ],
    });
    if (!humanCategory)
      return res.status(404).send("Human category not found.");
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);
    if (!humanCategory)
      return res.status(404).send("Human category not found.");
    await humanCategory.update(req.body);
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id);
    if (!humanCategory)
      return res.status(404).send("Human category not found.");
    await humanCategory.destroy();
    res.status(200).send("Human category deleted.");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
