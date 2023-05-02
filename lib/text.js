class text {
    constructor(data) {
      this.data = data;
    }
  
    textFormatting() {
        let inputFirstThree = this.data.substring(0,3).toUpperCase();
        return inputFirstThree;
    }
  }
  
  module.exports = text;
