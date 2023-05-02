class shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  generateShape() {
    let figure = ``;
  
    if(this.shape === 'circle'){
        figure = `<circle cx="150" cy="110" r="100" style="fill:${this.color}" />`
    } else if(this.shape === 'triangle'){
        figure = `<polygon points="30 200, 145 0, 280 200" style="fill:${this.color}" />`
    } else if(this.shape === 'square'){
        figure = `<rect x="50" y="20" width="200" height="200" style="fill:${this.color}" />`
    };
  
    return figure;
  }
}

module.exports = shape;
