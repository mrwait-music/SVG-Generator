const index = require('../SVG-Generator/Develop/index.js')


const generateSVG = ({shape, shapeColor, textColor, initials}) =>

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${initials}</text>

</svg>`
















