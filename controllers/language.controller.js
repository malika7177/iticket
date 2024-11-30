const { Language } = require("../models");
const { validateLanguage } = require("../validations/language.validation");

exports.createLang = async (req, res) => {
  const { error } = validateLanguage(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const lang = await Language.create(req.body);
    res.status(201).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangs = async (req, res) => {
  try {
    const langs = await Language.findAll();
    res.status(200).send(langs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const language = await Language.findByPk(req.params.id);
    if (!language) return res.status(404).send("Language not found");
    res.status(200).send(language);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLang = async (req, res) => {
  const { error } = validateLanguage(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const lang = await Language.findByPk(re.params.id);
    if (!lang) return res.status(404).send("Language not found");
    await lang.update(req.body);
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const lang = await Language.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Language not found");
    await lang.destroy();
    res.status(200).send("Language deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
