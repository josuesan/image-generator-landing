const Joi = require('joi');

const Image = Joi.object({
  text: Joi.string()
    .min(2)
    .max(250),
  fontSize: Joi.number()
    .integer()
    .min(8)
    .max(120),
  fontColor: Joi.string()
    .regex(/^#[A-Fa-f0-9]{6}/),
  bgColor: Joi.string()
    .regex(/^#[A-Fa-f0-9]{6}/)
    .required(),
  format: Joi.string()
    .pattern(/^[a-z]+$/)
    .min(3)
    .required(),
  width: Joi.number()
    .integer()
    .min(0)
    .max(3000)
    .required(),
  height: Joi.number()
    .integer()
    .min(0)
    .max(3000)
    .required(),
}).with('text', ['fontSize', 'fontColor']);

function validateImage(image) {
  return Image.validate(image);
}

module.exports = { validate: validateImage };
