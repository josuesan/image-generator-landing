const GeneratorImage = require('../../../../entities/GeneratorImage');
const { validate } = require('../../../../models/Image');

export default function handler(req, res) {
  const { error } = validate(req.query);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const {
    text, fontSize, fontColor, format, bgColor, width, height,
  } = req.query;
  const generator = new GeneratorImage();
  generator.changeSizeCanvas(parseInt(width, 10), parseInt(height, 10));
  generator.changeBackgroundColor(bgColor);
  generator.changeFormatImage(format);
  if (text) {
    generator.addText(text, fontSize, fontColor);
  }
  const base64 = generator.convertDataUrl();
  return res.status(200).json({
    data: base64,
    code: 200,
  });
}