const { createCanvas } = require('canvas');
const { v4 } = require('uuid');
const path = require('path');

class GeneratorImage {
  constructor() {
    this.canvas = createCanvas(50, 50);
    this.ctx = this.canvas.getContext('2d');
    this.format = 'png';
  }

  changeFormatImage(format) {
    this.format = format;
  }

  changeBackgroundColor(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  changeSizeCanvas(width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }

  addText(text, fontSize, fontColor) {
    this.ctx.fillStyle = fontColor;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${fontSize}px Impact`;
    this.ctx.fillText(
      text,
      Math.round(this.canvas.width / 2),
      Math.round(this.canvas.height / 2),
      this.canvas.width,
    );
  }

  convertDataUrl() {
    return this.canvas.toDataURL(`image/${this.format}`, 1.0);
  }

  async createImage() {
    // const buffer = this.canvas.toBuffer(`image/${this.format}`);
    // const currentDay = new Date();
    // const year = currentDay.getFullYear(); const
    //   month = currentDay.getMonth() + 1;
    // const publicFolder = path.resolve(__dirname, '..', '..', 'public', 'images');
    // const pathFile = `${publicFolder}/${year}/${month}/${v4()}.${this.format}`;
    // await fse.outputFile(pathFile, buffer);
    // return pathFile;
  }
}

module.exports = GeneratorImage;
