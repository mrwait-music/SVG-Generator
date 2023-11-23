
const Triangle = require('./utils/Triangle.js')


describe('Test', () => {

    describe('equal', () => {
      it('should match the output of the render function for the triangle', () => {
        const triangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 18 244, 182 56, 182" fill="blue" />

<text x="150" y="150" font-size="60" text-anchor="middle" fill="red">BBB</text>

</svg>`;
        const triangleRender = new Triangle("blue", "red", "BBB");
        expect(triangleRender.render()).toEqual(triangle);
      });
    });
  });