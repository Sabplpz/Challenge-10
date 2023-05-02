//Required documents for functionality
const fs = require("fs");
const shape = require("./shape.js");
const text = require("./text.js");
const fileName = 'logo.svg';




class writeToFile extends shape {
    constructor(data) {
      super(data);
      this.data = data;
    }

    addText() {

      // text for the file being called from const text
      const textCut = new text(this.data.text);
      // shape for the file being called from const shape
      const shapeChoose = new shape(this.data.shape, this.data.scolor);

      return `
      <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

      ${shapeChoose.generateShape()}
  
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.data.tcolor}">${textCut.textFormatting()}</text>
  
      </svg>`;
    }

    file() {
        return fs.writeFileSync(fileName, this.addText());
    }
  
  }
  
  module.exports = writeToFile;
